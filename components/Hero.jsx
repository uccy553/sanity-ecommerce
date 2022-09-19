import React from 'react';
import Link from 'next/link';
import herobtn from '../public/button.png';
import hero from '../public/hero4.png';

const Hero = () => {
  return (
      <div className="hero" style={{ backgroundImage: `url(${hero.src})` }}>
        <p>trade-in-offer</p>
        <h1 style={{ lineHeight: '60px', fontSize: '50px' }}>
          Super Value Deals
          <br /> <span style={{ color: '#088178' }}>On All Products</span>
        </h1>
        <span>save more with coupons & up to 70% off</span>
        <Link href="/Shop">
          <button style={{ backgroundImage: `url(${herobtn.src})` }}>Shop Now</button>
        </Link>
      </div>
  );
};

export default Hero;
