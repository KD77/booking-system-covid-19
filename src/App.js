import React, {Component} from 'react';
import './App.css';
import CovidTest from "./components/CovidTest/CovidTest";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import LandingPage from "./components/LandingPage/LandingPage";



class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            </div>
        );
    }


}

export default App;
