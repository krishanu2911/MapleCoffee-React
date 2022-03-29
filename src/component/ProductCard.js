import React , { useState } from 'react';
import "../App.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUserDetail} from "../context/userdetail-context";
function ProductCard( {prod}) {
    const cartNavigate =  useNavigate();
    const { imgurl ,title ,rating ,price  } = prod;
    const { userDetail , setUserDetail } = useUserDetail();
    const { wishlist, cartlist } = userDetail;
    function addToCartHandler (productcart) {
      const findProdInCart = cartlist.find((item) => item._id === productcart._id)
      if(findProdInCart){
        cartNavigate("/cart")
      }else{
        setUserDetail({...userDetail, cartlist:[...cartlist, {...productcart,count:1}]})
      }
    }
    function addWishlistHandler(productWish) {
      const findProdInWishList = wishlist.find((item) => item._id === productWish._id )
      if(findProdInWishList){
      const RemovedWishList = wishlist.filter((item) => item._id !== productWish._id );
      setUserDetail({...userDetail, wishlist:[...RemovedWishList]})
      }else{
        setUserDetail({...userDetail,wishlist:[...wishlist, productWish]})
      }
    }
    console.log(cartlist)
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
                <div className="icons txt-lg bold-font" onClick={() => {

                  addWishlistHandler(prod)
                  }}>
                  {
                    wishlist.find((item) => item._id === prod._id ) ? <h1 className='txt-m'>Remove from wishlist</h1> : <FaHeart />
                  }
                </div>
                
                <div className="icons txt-lg bold-font" onClick={() => addToCartHandler(prod)}>
                 {
                  cartlist.find((item) => item._id === prod._id) ? <h1 className='txt-lg'>Go to Cart</h1> : <h1 className='txt-lg bold-font'>Add to cart</h1>
                }
                  </div>
              </div>
            </div>  
        </div>
    )
}
export default ProductCard;