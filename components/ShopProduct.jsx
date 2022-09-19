import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ShopProduct = ({products: {image, name, slug, price}}) => {
  return (
    <div>
        <Link href={`/shopproduct/${slug.current}`}>
            <div className="product-card">
                <img src={urlFor(image && image[0])} alt="shop-product" width={250} height={250} />
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </Link>
    </div>
  )
}

export default ShopProduct