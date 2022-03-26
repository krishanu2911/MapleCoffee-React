import style from "./Navbar.module.css";
import React from 'react';
// import "../../App.css";
import { Link } from "react-router-dom";
import { FaCartArrowDown , FaHeart } from 'react-icons/fa';


function Navbar() {
    return (
            <nav className="nav-bar padding-lg maple-wrap">
                <div className="nav-left">
                    <Link className=" logo-txt boldest-font" to="/">Maple Coffee</Link>
                </div>                
                <div className="nav-right maple-wrap">
                    <Link className=" txt-lg  bold-font" to="/login">Login</Link>
                    <Link className=" txt-lg  bold-font" to="/signup">SignUp</Link>
                    <Link className=" txt-lg  maple-flex-xy-center" to="/wishlist">< FaHeart /></Link>
                    <Link className=" txt-lg  maple-flex-xy-center" to="/cart"><FaCartArrowDown /></Link>
                </div>
            </nav>
    )
}
export default Navbar;