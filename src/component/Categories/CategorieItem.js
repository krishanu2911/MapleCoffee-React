import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product-context';
function CategorieItem( {itemDetail}) {
    const categoryNavigate = useNavigate();
    const {filterDispatch} = useProduct();
    return (
        <div className="maple-flex-xy-center category-item txt-center" onClick={() => {
            filterDispatch({type:"CATEGORY", payload: itemDetail.categoryName})
            categoryNavigate("./productlisting")
        }}>
            <h1 className='txt-xl'>{itemDetail.categoryTitle}</h1>
            <p className='text-centre'>{itemDetail.description}</p>
        </div>
    )
}
export default CategorieItem;
