import React, {useState, useEffect } from 'react';
import useAxios from '../../utils/useAxios';
import "../../App.css";
import { Link } from "react-router-dom";
import { Loader , CategorieItem } from '../index';
 function Categories() {
    const {apiResponse , loading} = useAxios("/api/categories");
    const {categories} = apiResponse;
    console.log(categories)
    return (
        <div className="category-div maple-flex-xy-center maple-wrap">
            {
              loading ? <Loader /> : categories.map((itemCate) => {
                    return(
                        <Link to="/productlisting"><CategorieItem itemDetail={itemCate} /></Link>
                        
                    )
                })
            }
        </div>
    )
}
export default Categories;