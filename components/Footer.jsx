import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import applogo from '../public/pay/app.jpg';
import applogo2 from '../public/pay/play.jpg';
import pay from '../public/pay/pay.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer>
        <div className="col-1">
            <Image src={logo} alt="logo" width={180} height={40} />
            <h4>Contact</h4>
            <p><strong>Address: </strong> 234 nyc street</p>
            <p><strong>Phone: </strong> 345-345-2345 / 748-378-9856 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
            <div className='follow'>
                <h4>Follow Us</h4>
                <div className='icon-1'>
                    <FacebookIcon style={{color: '#4267B2', fontSize: '20px'}} />
                    <TwitterIcon style={{color: '#00acee', fontSize: '20px'}} />
                    <InstagramIcon style={{color: '#8a3ab9', fontSize: '20px'}} />
                    <PinterestIcon style={{color: '#E60023', fontSize: '20px'}} />
                    <YouTubeIcon style={{color: '#FF0000', fontSize: '20px'}} />
                </div>
            </div>
        </div>

        <div className='col'>
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Contact us</a>
        </div>

        <div className='col'>
            <h4>My Account</h4>
            <a href="#">Account</a>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My WishList</a>
            <a href="#">Track My order</a>
            <a href="#">Help</a>
        </div>

        <div className='col install'>
            <h4>Install App</h4>
            <p>from App store or Google play</p>
            <div className='row'>
                <Image src={applogo} alt="app-logo" />
                <Image src={applogo2} alt="app-logo" />
            </div>
            <p>Secured Payment Method</p>
            <Image src={pay} alt="pay" />
        </div>

        <div className='copyright'>
            <p>© All rights reserved, Created by Uccy</p>
        </div>


    </footer>
  )
}

export default Footer