import React from 'react';
import Logo from './Logo.png'
import './Navbar.css';
import Sidebar from "../Sidebar/Sidebar";
 import Signin from "../Signin/Signin";

const Navbar = (props) => {

    console.log('Nav bar', props.logedIn)
   

    

    const generalNav = <div>
        <nav className="db dt-l w-100 border-box pa3 ph5-l">
            {/*eslint-disable-next-line*/}
            <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                <img src={Logo} className="dib w3 h3 br-100" alt="Logo"/>
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                {/*eslint-disable-next-line*/}
                <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
                {/*eslint-disable-next-line*/}
                <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/signin" title="Sign In">Sign In</a>
                {/*eslint-disable-next-line*/}
                <a className="link dim dark-gray f6 f5-l dib" href="/register" title="Register">Register</a>
                <h1>{}</h1>
            </div>
        </nav>
    </div>


    const userNav =
        <div>
        <header className="tc bg-light-gray">
            <div>

                <h1 className="mt2 mb0 i fw1 f1">
                    <div>
                        <a href="/" title="Home">
                            <img src={Logo} className="w3 h3 br--top-m" alt="Logo"/>
                        </a>
                    </div>
                </h1>
            </div>
        </header>
        <Sidebar dat={props.currentUser}/>
    </div>

    if (props.logedIn) {
        return userNav
    } else {
        return  generalNav
    }

}

export default Navbar;