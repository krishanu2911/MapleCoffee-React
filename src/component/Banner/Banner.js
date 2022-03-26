import React from 'react';
import Style from "./Banner.module.css";
import { Link } from "react-router-dom";
function Banner() {
    return (
        <div className={Style.bannerDiv}>
            <div className={Style.bannerText}>
                <h1 className=" semibold-font ">Experience the smoothness of the most premium <span className="boldest-font">Maple</span> coffee</h1>
                <Link className="btn txt-lg  bold-font" to="/productlisting">Order Now</Link>
            </div>
            <img className="hero-img" src="https://res.cloudinary.com/krishanucloud/image/upload/v1648205996/sample-coffee-2_derbfl.png" alt="hero-img" />
        </div>  
    )
}
export default Banner;