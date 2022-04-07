import React from 'react';
import { useUserDetail } from '../context/userdetail-context';
import "../App.css";
import WishlistCard from './WishlistCard';

function Wishlish() {
    const { userDetail } = useUserDetail();
    const { wishlist } = userDetail;
    return (
        <div className='maple-flex-xy-center maple-wrap gap-m'>
           {
              (wishlist.length===0) ?  <h1 className='txt-center'>Your Wishlist is empty</h1>
              : wishlist.map((item) => {
                   return <WishlistCard item={item} key={item._id}/>
               })
           }
        </div>
    )
}
export default Wishlish;