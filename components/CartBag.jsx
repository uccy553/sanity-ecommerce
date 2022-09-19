import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useStateContext } from '../context/StateContext';



const CartBag = () => {
    const { totalQuantities } = useStateContext();
    return (
     <div>
        <button type="button" className='cart-icon'>
            <ShoppingBagIcon />
            <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
     </div>
    )
}

export default CartBag