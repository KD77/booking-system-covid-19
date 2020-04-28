import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CovidTest from "./components/CovidTest/CovidTest";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import LandingPage from "./components/LandingPage/LandingPage";



class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Navbar/>
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
