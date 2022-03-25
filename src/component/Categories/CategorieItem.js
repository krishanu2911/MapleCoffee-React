import React from 'react'
import "../../App.css"
function CategorieItem( {itemDetail}) {
    return (
        <div className="maple-flex-xy-center category-item txt-center">
            <h1 className='txt-xl'>{itemDetail.categoryName}</h1>
            <p className='text-centre'>{itemDetail.description}</p>
        </div>
    )
}
export default CategorieItem;
