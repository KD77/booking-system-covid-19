import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { FiHome, FiLogOut, FiSettings } from "react-icons/fi";
import { FaRegCalendarPlus } from "react-icons/all";
import { FcAbout } from "react-icons/all";
import { auth } from "../../firebase/firebase.utils";

class sidebar extends React.Component {
  render() {
    return (
      <Menu>
        <div className="tc outline-0-m ">
          {/* <a>
            <FaUserCircle size={27} />
         </a>*/}
          <img
            src={require("../../assets/images.png")}
            className="br-100 h4 w4 dib ba b--black-05 pa2 "
            title="Photo of a kitty staring at you"
            alt=""
          />
          <div className="tc ">
            <span>{this.props.dat.firstName}</span>
            <span className="ma2">{this.props.dat.lastName}</span>
            <br />
            <span>{this.props.dat.email}</span>
          </div>
        </div>

        <a className=" menu-item " href="/user/userHistory">
          <FiHome /> Home
        </a>


        <a className="menu-item" href="/user/booking">
          <FaRegCalendarPlus /> Appointments
        </a>

        <a className="menu-item " href="/user/UserEditPage">
          <FiSettings /> Account Settings
        </a>

        <a className="menu-item " href="/signin" onClick={() => auth.signOut()}>
          <FiLogOut /> Log out
        </a>

        <a className="menu-item" href="/about">
          <FcAbout /> About Us
        </a>
      </Menu>
    );
  }
}

export default sidebar;
