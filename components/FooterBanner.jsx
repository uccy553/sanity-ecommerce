import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import im1 from '../public/banner/b17.jpg';
import im2 from '../public/banner/b10.jpg';


const FooterBanner = () => {
  return (
    <Link href={'./Shop'}>
        <div style={{marginTop: '40px'}}>
    <div className='sm-banner'>
        <div className='banner-box' style={{ backgroundImage: `url(${im1.src})` }}>
          <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className='btn-banner'>Learn more</button>
        </div>

        <div className='banner-box banner-box2' style={{ backgroundImage: `url(${im2.src})` }}>
            <h4>spring/summer</h4>
            <h2>Upcoming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className='btn-banner'>Collection</button>
        </div>
    </div>
    </div>
    </Link>
   
  )
}

export default FooterBanner