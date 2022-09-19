import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const NaProducts = ({product: {image, name, slug, price}}) => {
  return (
    <div>
        <Link href={`/products/newarrivals/${slug.current}`}>
            <div className='product-card'>
                <img src={urlFor(image && image[0])} alt="New-arrival" width={250} height={250} />
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </Link>
    </div>
  )
}

export default NaProducts