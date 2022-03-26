import React from 'react';
import useAxios from '../utils/useAxios';
import "../App.css"
import {Loader} from "./index";
function NewEdition() {
    const {apiResponse , loading} = useAxios("/api/products");
    const { products } = apiResponse
    let newProdList = [];
    if(!loading){
     newProdList = products.filter((item) => item.newedition)
    }
    return (
        <div className="newEdition-div maple-flex-xy-center padding-lg maple-wrap">
            <div className='txt-xl bold-font'>New Edition Coffee</div>
            <div className=' maple-flex-xy-center maple-wrap gap-m'>
             {
                loading ? <Loader /> :newProdList.map((prod) => {
                    return(
                        <div className='newEditionItem padding-lg border-rad-lg'>
                            <h1 className='txt-lg'>{prod.title}</h1>
                        </div>  
                    )
                })
            }   
            </div>
            
        </div>
    )
}
export default NewEdition;