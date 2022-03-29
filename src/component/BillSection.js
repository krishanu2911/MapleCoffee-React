import React from "react";
import { useUserDetail } from "../context/userdetail-context";
import "../App.css";
function BillSection() {
  const { userDetail } = useUserDetail();
  const { cartlist } = userDetail;
  const totalBill = cartlist.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);
  return (
    <div className="card bill-section">
      <div className="header">
        <div>
          <div className="hearder-text-primary pd-horizontal">
            <h3 className="boldest-font">Payment Details</h3>
            <hr />
            <div>
              {cartlist.map((item) => {
                return (
                  <div>
                    <div className="maple-flex item-bill">
                      <div>
                        <h4 className="semibold-font">{item.title}</h4>
                      </div>
                      <div className="maple-flex gap-m">
                        <h4 className="semibold-font">(Qty:{item.count})</h4>
                        <h4 className="txt-gray">
                          {item.count * item.price}/-
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="maple-flex item-bill">
              <h4 className="semibold-font">Delivery Charge</h4>
              <h5 className="txt-gray">Rs 39/-</h5>
            </div>
            <hr />
            <div className="maple-flex item-bill">
              <h4 className="boldest-font">Total Charge</h4>
              <h4 className="boldest-font">{totalBill +39}/-</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-card-footer maple-flex-xy-center">
        <a href="#" class="icons btn">
          Place Order
        </a>
      </div>
    </div>
  );
}
export default BillSection;
