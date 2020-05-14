import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css"
import {FiHome, FiLogOut, FiSettings} from 'react-icons/fi'
import {FaRegCalendarPlus} from "react-icons/all";
import {FcAbout} from "react-icons/all";
import {FaUserCircle} from "react-icons/fa";

const sidebar = () => {
    return (
        <Menu>
            <div className="tc">
                <a><FaUserCircle size={27}/></a>
                <div className="tc">
                    <span>Jone.snow@gmail.com</span>
                    <div className="seperator"></div>
                </div>
            </div>

            <a className=" menu-item " href="/">
                <FiHome/>  Home
            </a>

            <a className="menu-item" href="/">
                <FaRegCalendarPlus/> Appointments
            </a>

            <a className="menu-item " href="/">
                <FiSettings/>  Account Settings
            </a>

            <a className="menu-item " href="/">
                <FiLogOut/> Log out
            </a>

            <a className="menu-item" href="/">
                <FcAbout/> About Us
            </a>
        </Menu>
    );
};

export default sidebar;