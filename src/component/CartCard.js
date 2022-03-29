import React from "react";
import "../App.css";
import { useUserDetail } from "../context/userdetail-context";
function CartCard({ prod }) {
  const { userDetail, setUserDetail } = useUserDetail();
  const { wishlist, cartlist } = userDetail;
  const { imgurl, title, price, count } = prod;
  function moveToWishlist(moveProductToWish) {
    const findProdInWish = wishlist.find(
      (item) => item._id === moveProductToWish._id
    );
    if (findProdInWish) {
      const updatedCartAfterRemove = cartlist.filter(
        (item) => item._id !== moveProductToWish._id
      );
      setUserDetail({ ...userDetail, cartlist: [...updatedCartAfterRemove] });
    } else {
      const updatedCartAfterRemove = cartlist.filter(
        (item) => item._id !== moveProductToWish._id
      );
      setUserDetail({
        ...userDetail,
        wishlist: [...wishlist, moveProductToWish],
        cartlist: [...updatedCartAfterRemove],
      });
    }
  }
  function increaseQty(product) {
    const updateqty = cartlist.map((item) =>
      item._id === product._id
        ? { ...item, count: item.count + 1 }
        : { ...item }
    );
    setUserDetail({ ...userDetail, cartlist: [...updateqty] });
  }
  function decreaseQty(product) {
    if (product.count === 1) {
      const updateCartAfterEmpty = cartlist.filter(
        (item) => item._id !== product._id
      );
      setUserDetail({ ...userDetail, cartlist: [...updateCartAfterEmpty] });
    } else {
      const updateqty = cartlist.map((item) =>
        item._id === product._id
          ? { ...item, count: item.count - 1 }
          : { ...item }
      );
      setUserDetail({ ...userDetail, cartlist: [...updateqty] });
    }
  }
  function removeCartProduct(productToRemove) {
    const updatedCartAfterRemove = cartlist.filter((item) => item._id !== productToRemove._id)
    setUserDetail({...userDetail,cartlist:[...updatedCartAfterRemove]})
  }
  return (
    <div>
      <div className="card ">
        <div className="header">
          <div className="header-image-text-div">
            <img className="header-image" src={imgurl} alt="maple-image" />
          </div>
          <div className="pd-horizontal">
            <div className="hearder-text-primary maple-flex ">
              <h1>{title}</h1>
              <h2>Qty:{count}</h2>
            </div>
          </div>
          <div className="hearder-text-secondary pd-horizontal maple-flex gap-m">
            <h3>💰{price}/-</h3>
            <button className="bold-font border-rad-m" onClick={() => removeCartProduct(prod)}>Remove</button>
          </div>
        </div>
        <div className="footer-card">
          <div
            className="icons txt-lg bold-font"
            onClick={() => moveToWishlist(prod)}
          >
            move to wishlist
          </div>

          <div className="maple-flex gap-m">
            <button className="cart-qty-btn" onClick={() => increaseQty(prod)}>
              +
            </button>
            <h1 className="txt-lg">{prod.count}</h1>
            <button className="cart-qty-btn" onClick={() => decreaseQty(prod)}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
