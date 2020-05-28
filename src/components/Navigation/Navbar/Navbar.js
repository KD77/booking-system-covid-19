import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineLogout } from "react-icons/ai";
import { auth } from "../../../Database/firebase.utils";

const Navbar = props => {

  // console.log('Admin Check',props.admin)

  const generalNav = (

      <div className=" center ph2-ns">

        {/*T1*/}
        <div className="cf ph2-ns">
          <div className="fl w-100 w-third-ns pa2">
              <a
                className="mid-gray link dim w-10-l tc tl-l  "
                href="/"
                title="Home"
               >
                 <img src={Logo} className=" w3 grow h3 br-100" alt="Logo" />
               </a>
             </div>

           {/*T2*/}
          <div className="fl w-50 w-third-ns pa2 ">

            <div className=" pv2 tc f1 title">Medical Appointment</div>
          </div>

         {/*T3*/}
          <div className="fl w-50 w-third-ns pa2">

              <div className=" pv4 tr">

                {/*eslint-disable-next-line*/}
                <a
                    className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
                    href="/"
                    title="Home"
                >
                  Home
                </a>

                {/*eslint-disable-next-line*/}
                <a
                    className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
                    href="/about"
                    title="Home"
                >
                  About
                </a>

                {/*eslint-disable-next-line*/}
                <a
                    className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
                    href="/signin"
                    title="Sign In"
                >
                  Sign In
                </a>

                {/*eslint-disable-next-line*/}
                <a
                    className="link dim dark-gray f6 f5-l dib"
                    href="/register"
                    title="Register"
                >
                  Register
                </a>
              </div>


          </div>
        </div>
      </div>
  );

  const userNav = (
    <div>
      <header className=" bg-light-gray">
        <div>
          <div>
            <div className="tc fr mr3  h2 mv4 ">
              <a
                className=" tc dark-gray pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1 no-underline"
                href="/signin"
                onClick={() => auth.signOut()}
              >
                Logout
                <AiOutlineLogout class="ml2 tc" />
              </a>
            </div>
          </div>
          <a href="/" title="Home" className=" ml6">
            <img src={Logo} className="w3 h3 br--top-m" alt="Logo" />
          </a>
        </div>
        <Sidebar dat={props.currentUser} ad = {props.admin}/>
      </header>
    </div>
  );

  // Admin Nav
  const adminNav = (
      <div>
        <header className=" bg-light-gray">
          <div>
            <div>
              <div className="tc fr mr3  h2 mv4 ">
                <a
                    className=" tc dark-gray pv2 ph3 bg-white hover-bg-near-white ba b--moon-gray br2 shadow-1 no-underline"
                    href="/signin"
                    onClick={() => auth.signOut()}
                >
                  Admin Logout
                  <AiOutlineLogout class="ml2 tc" />
                </a>
              </div>
            </div>
            <a href="/" title="Home" className=" ml6">
              <img src={Logo} className="w3 h3 br--top-m" alt="Logo" />
            </a>
          </div>
          <Sidebar dat={props.currentUser}  ad = {props.admin}/>
        </header>
      </div>
  );

  if (props.admin) {
    return adminNav;
  }
  else if (props.logedIn) {
    return userNav;
  } else {
    return generalNav;
  }
};

export default Navbar;



