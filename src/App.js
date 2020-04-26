import React, {Component} from 'react';
import './App.css';
import CovidTest from "./components/HomePage/CovidTest/CovidTest";
import Navbar from "./components/HomePage/Navbar/Navbar";
import Register from "./components/HomePage/Register/Register";
import Signin from "./components/HomePage/Signin/Signin";
import LandingPage from "./components/HomePage/LandingPage/LandingPage";



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
