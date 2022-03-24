import style from "./Navbar.module.css";
import React from 'react';
import "../../App.css";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from 'react-icons/fa';


function Navbar() {
    return (
            <nav className="nav-bar">
                <div className="nav-left">
                    <Link className="header-text-color txt-xl semibold-font" to="/">Maple Coffee</Link>
                    {/* <a className="header-text-color txt-xl semibold-font" href="#">Maple UI</a> */}
                </div>                
                <div className="nav-right">
                    <Link className=" txt-lg header-text-color" to="/productlisting"><FaCartArrowDown /></Link>

                </div>
            </nav>
        // <div className={style.navbar}>
        //     <h1 >Navbar</h1>
        //     <Link to="/productlisting">Productlisting</Link>
        //     <Link to="/">Home</Link>
        // </div>
    )
}
export default Navbar;