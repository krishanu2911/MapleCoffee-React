import React from "react";
import "../App.css";
import { useUserDetail } from "../context/userdetail-context";
function WishlistCard( { item }) {
  const { userDetail , setUserDetail } = useUserDetail();
  const { wishlist } = userDetail;
  const { imgurl ,title ,rating ,price  } = item;
  function removeWishHandler (prod) {
      const RemovedWishList = wishlist.filter((item) => item._id !== prod._id );
      setUserDetail({...userDetail, wishlist:[...RemovedWishList]})
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
        <div className="icons txt-lg bold-font">Add To Cart</div>
      </div>
    </div>
  );
}
export default WishlistCard;
