import React from "react";
import "../App.css";
import { FilterSection } from "../component/index";
import { useProduct } from "../context/product-context";
import { FaHeart } from "react-icons/fa";
function ProductListing() {
  const { filteredProdList } = useProduct();
  return (
    <div className="prodListing-main">
      <FilterSection />
      <div className="prodList-div gap-m">
        {filteredProdList.map((prod) => {
          return (
            <div class="card ">
              <div class="header">
                <div class="header-image-text-div">
                  <img
                    class="header-image"
                    src={prod.imgurl}
                    alt="maple-image"
                  />
                </div>
                <div class="pd-horizontal">
                  <div class="hearder-text-primary maple-flex ">
                    <h1>{prod.title}</h1>
                    <h2>⭐{prod.rating}⭐</h2>
                  </div>
                </div>
                <div class="hearder-text-secondary pd-horizontal">
                  <h3>💰{prod.price}/-</h3>
                </div>
              </div>
              <div class="footer-card">
                <div class="icons txt-lg bold-font">
                  <FaHeart />
                </div>
                <div class="icons txt-lg bold-font">Add To Cart</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductListing;