import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';

const Banner = ({banner : {image, buttonText, smallText, largeText1}}) => {
  return (
    <div>
      <img src={urlFor(image)} alt="banner-image" className='banner-image' />
    <div className='text-block'>
      <p>{smallText}</p>
      <h2 className='large-text'>{largeText1}</h2>
      <Link href={"/Shop"}>
        <button className='btn-banner'>{buttonText}</button>
      </Link>
    </div>

    </div>

  )
}

export default Banner