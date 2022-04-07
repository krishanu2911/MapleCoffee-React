import React, { useState, useEffect } from "react";
import useAxios from "../../utils/useAxios";
import "../../App.css";
import { Link } from "react-router-dom";
import { Loader, CategorieItem } from "../index";
function Categories() {
  const { apiResponse, loading } = useAxios("/api/categories");
  const { categories } = apiResponse;
  console.log(categories);
  return (
    <div>
      <h1 className="txt-xxl txt-center boldest-font">Categories...</h1>
      <div className="category-div maple-flex-xy-center maple-wrap">
        {loading ? (
          <Loader />
        ) : (
          categories.map((itemCate) => {
            return (
              <Link to="/productlisting">
                <CategorieItem itemDetail={itemCate} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
export default Categories;
