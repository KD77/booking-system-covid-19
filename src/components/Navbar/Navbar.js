import React from 'react';
import Logo from './Logo.png'
import './Navbar.css';
 import Signin from "../Signin/Signin";

const Navbar = (props) => {


    return (
        <div>
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
                </div>
            </nav>

        </div>
    );
}

export default Navbar;