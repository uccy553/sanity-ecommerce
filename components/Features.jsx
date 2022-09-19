import React from 'react';
import fe1 from '../public/features/f1.png';
import fe2 from '../public/features/f2.png';
import fe3 from '../public/features/f3.png';
import fe4 from '../public/features/f4.png';
import fe5 from '../public/features/f5.png';
import fe6 from '../public/features/f6.png';
import Image from 'next/image';

const Features = () => {
  return (
    <div className="features">
      <div className="fe-box">
        <Image src={fe1} alt="features-1" className="fe-img" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <Image src={fe2} alt="features-2" className="fe-img" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <Image src={fe3} alt="features-3" className="fe-img" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <Image src={fe4} alt="features-4" className="fe-img" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <Image src={fe5} alt="features-5" className="fe-img" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <Image src={fe6} alt="features-6" className="fe-img" />
        <h6>24/7 support</h6>
      </div>
    </div>
  );
};

export default Features;
