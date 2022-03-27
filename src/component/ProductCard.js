import React from 'react';
import "../App.css";
import { FaHeart } from "react-icons/fa";
function ProductCard( {prod}) {
    const { imgurl ,title ,rating ,price } = prod;
    return (
        <div>
          <div className="card ">
              <div className="header">
                <div className="header-image-text-div">
                  <img
                    className="header-image"
                    src={imgurl}
                    alt="maple-image"
                  />
                </div>
                <div className="pd-horizontal">
                  <div className="hearder-text-primary maple-flex ">
                    <h1>{title}</h1>
                    <h2>⭐{rating}⭐</h2>
                  </div>
                </div>
                <div className="hearder-text-secondary pd-horizontal">
                  <h3>💰{price}/-</h3>
                </div>
              </div>
              <div className="footer-card">
                <div className="icons txt-lg bold-font">
                  <FaHeart />
                </div>
                <div className="icons txt-lg bold-font">Add To Cart</div>
              </div>
            </div>  
        </div>
    )
}
export default ProductCard;