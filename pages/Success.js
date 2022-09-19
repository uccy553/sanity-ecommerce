import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
 
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])
  
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BusinessCenterIcon /></p>
            <h2>Thank you for your patronage</h2>
            {/* <p className='email-msg'>Check your email inbox for the receipt</p> */}
            <p className='description'>If you have any questions please email
                <a className='email' href="mailto:umonday90@proton.me">
                umonday90@proton.me
                </a>
            </p>
            <Link href={"/Shop"}>
                <button type="button" width="300px" className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success