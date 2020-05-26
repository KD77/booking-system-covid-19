import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom';
import CovidTest from "./components/CovidTest/CovidTest";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLandingPage from "./components/UserLandingPage/UserLandingPage";
import Footer from "./components/Footer/Footer";
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';



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


    render() {
        return (
            <div>
            <Router>
                <div>
                    <Navbar logedIn = {this.isLogedIn()} currentUser={this.state.currentUser} />
                    {/*<Navbar currentUser={this.state.currentUser}/>*/}
                    <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/signin' component = {Signin} />
                    <Route path='/user' component = {UserLandingPage} />
                    <Route path='/register' component = {Register} />
                    <Route path = '/covid' component={CovidTest}/>
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
