import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import CovidTest from "../components/MainPage/CovidTest/CovidTest";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Register from "../components/Authentication/Register/Register";
import Signin from "../components/Authentication/Signin/Signin";
import LandingPage from "../components/MainPage/LandingPage/LandingPage";
import Footer from "../components/MainPage/Footer/Footer";
import UserEditPage from "../components/User/UserEditPage/UserEditPage"
import {auth,creatUserProfileDocument} from '../Database/firebase.utils';
import Booking from '../components/User/Booking/Booking';
import About from '../components/MainPage/About/About'
import UserList from "../components/Admin/UserList/UserList";
import UserHistory from "../components/User/UserHistory/UserHistory";
import DoctorsList from "../components/Admin/DoctorList/DoctorList";
import ListOfAppointment from '../components/Admin/ListOfAppointments/ListOfAppointments'




class App extends React.Component {
    constructor(){
        super();

        this.state={
            currentUser:{}
        };
    }
    unsubscribeFromAuth=null;
    componentDidMount(){
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef=await creatUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot =>{
                    this.setState({
                        currentUser:{
                            id:snapShot.id,
                            ...snapShot.data()
                        }
                    });
                   // console.log(this.state.currentUser.firstName);
                });
            }
            this.setState({ currentUser:userAuth});
        });

    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

     isLogedIn () {

        return this.state.currentUser !== null
    }

    isAdmin () {
        return this.state.currentUser !== null && this.state.currentUser.email === 'admin@admin.com'
    }



    signOut = () => {
        auth.signOut();
        this.props.history.replace('/')
    };

    authUser =  <div>
        <Route path='/user/UserEditPage' component={UserEditPage}/>
        <Route path='/user/UserHistory' component={UserHistory}/>
        <Route path='/user/booking' component = {Booking} />
    </div>

    autAdmin = <div>
        <Route path='/Admin/UserList' component={UserList}/>
        <Route path='/Admin/doctorsList' component={DoctorsList}/>
        <Route path='/Admin/listOfAppointment' component={ListOfAppointment}/>
        <Route path='/user/UserEditPage' component={UserEditPage}/>
    </div>


    ProtectedRoute () {
        if (this.isLogedIn() && this.isAdmin())

            return this.autAdmin

        else if (this.isLogedIn())
            return  this.authUser
    }





    render() {
        return (
            <div>
            <Router>
                <div>
                    <Navbar logedIn = {this.isLogedIn()} currentUser={this.state.currentUser} signOut={this.signOut} admin = {this.isAdmin()} />
                    <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/signin' component = {Signin} />
                    <Route path='/register' component = {Register} />
                    <Route path='/covid' component={CovidTest}/>
                    <Route path='/about' component = {About} />
                    {this.ProtectedRoute()}
                    <Route path='*' component={() => <h1 className='tc '>404 NOT FOUND</h1>} />
                    </Switch>
                </div>
             </Router>
                    <Footer/>
            </div>
        );
    }


}

export default App;
