import React from "react";
import { useUserDetail } from "../context/userdetail-context";
import CartCard from "../component/CartCard";
import BillSection from "../component/BillSection";
function Cart() {
  const { userDetail } = useUserDetail();
  const { cartlist } = userDetail;
  return (
    cartlist.length ? 
    <div className="cart-section maple-flex">
      <div className="maple-flex maple-wrap cartlist-section">
        {cartlist.map((prod) => {
          return <CartCard prod={prod} key={prod._id} />;
        })}
      </div>
      <div>
        <BillSection />
      </div>
    </div>
    : <h1>Your Cart is Empty</h1>
  );
}
export default Cart;