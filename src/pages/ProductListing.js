import React from "react";
import "../App.css";
import { FilterSection } from "../component/index";
import { useProduct } from "../context/product-context";
import ProductCard from "../component/ProductCard";
function ProductListing() {
  const { filteredProdList } = useProduct();
  return (
    <div className="prodListing-main">
      <FilterSection />
      <div className="prodList-div gap-m">
        {filteredProdList.map((prod) => {
          return (
            <ProductCard prod={prod} key={prod._id}/>
          );
        })}
      </div>
    </div>
  );
}
export default ProductListing;