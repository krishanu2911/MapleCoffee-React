import React from "react";
import "../App.css";
import { useUserDetail } from "../context/userdetail-context";
import { useNavigate } from "react-router-dom";
function WishlistCard( { item }) {
  const cartNavigate = useNavigate();
  const { userDetail , setUserDetail } = useUserDetail();
  const { wishlist , cartlist } = userDetail;
  const { imgurl ,title ,rating ,price  } = item;
  function removeWishHandler (prod) {
      const RemovedWishList = wishlist.filter((item) => item._id !== prod._id );
      setUserDetail({...userDetail, wishlist:[...RemovedWishList]})
  }
  function addToCartClickHandler(productToCart){
    const findProdInCart = cartlist.find((item) => item._id === productToCart._id)
    if(findProdInCart){
      const updatedQtyItemExistInCart = cartlist.map((item) => item._id === productToCart._id ? {...item,count: item.count+1} : {...item})
      setUserDetail({...userDetail,cartlist:[...updatedQtyItemExistInCart]})
      cartNavigate("/cart")
    }else{
      setUserDetail({...userDetail,cartlist:[...cartlist,{...productToCart,count:1}]})
      cartNavigate("/cart")
    }
  }
  return (
    <div className="card ">
      <div className="header">
        <div className="header-image-text-div">
          <img className="header-image" src={imgurl} alt="maple-image" />
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
        <div
          className="icons txt-lg bold-font"
          onClick={() => removeWishHandler(item)}
        >
          Remove
        </div>
        <div className="icons txt-lg bold-font" onClick={() => addToCartClickHandler(item)}>Add To Cart</div>
      </div>
    </div>
  );
}
export default WishlistCard;
