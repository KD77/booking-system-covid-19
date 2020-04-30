import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CovidTest from "./components/CovidTest/CovidTest";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import LandingPage from "./components/LandingPage/LandingPage";
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {
    constructor(){
        super();

        this.state={
            currentUser:null
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
                    console.log(this.state);
                });
            }
            this.setState({ currentUser:userAuth});
        });

    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render() {

        return (
            <Router>
                <div>
                    <Navbar currentUser={this.state.currentUser}/>
                    <Switch>
                    <Route path='/' exact component={LandingPage}/>
                    <Route path='/signin' component = {Signin} />
                    <Route path='/register' component = {Register} />
                    <Route path = 'covid' component={CovidTest}/>
                    </Switch>
                </div>
             </Router>
        );
    }


}

export default App;
