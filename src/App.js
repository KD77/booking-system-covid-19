import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CovidTest from "./components/CovidTest/CovidTest";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLandingPage from "./components/UserLandingPage/UserLandingPage";
import Footer from "./components/Footer/Footer";
import UserEditPage from "./components/UserEditPage/UserEditPage"
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';
import Booking from './components/Booking/Booking';
import Slots from './components/Booking/Slots';



// const ProtectedRoute = ({component: Test, ...rest}) => {
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 if (auth.currentUser !== null) {
//                     return <Test {...props} />;
//                 } else {
//                     return (
//                         <Redirect to="/signin"/>
//                     );
//                 }
//             }}
//         />
//     );
// };



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
    signOut = () => {
        auth.signOut();
        this.props.history.replace('/')
    };


    render() {
        return (
            <div>
            <Router>
                <div>
                    <Navbar logedIn = {this.isLogedIn()} currentUser={this.state.currentUser} signOut={this.signOut} />
                    {/*<Navbar currentUser={this.state.currentUser}/>*/}
                    <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/signin' component = {Signin} />
                    <Route path='/user' component = {UserLandingPage} />
                    <Route path='/UserEditPage' component={UserEditPage}/>
                    <Route path='/register' component = {Register} />
                    <Route path='/covid' component={CovidTest}/>
                    <Route path='/booking' component = {Booking} />
                    <Route path='/slots' component = {Slots} />
                    <Route path='*' component={() => <h1 className='tc '>404 NOT FOUND</h1>} />
                    </Switch>
                </div>
             </Router>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        );
    }


}

export default App;
