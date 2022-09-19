import React from 'react';
import { urlFor, client } from '../lib/client';
import Link from 'next/link';
import shopImg from '../public/banner/b1.jpg';


const Shop = ({ products }) => {
 
  return (
    <div>
        <div className='page-header' style={{ backgroundImage: `url(${shopImg.src})` }}> 
          <p className='shop-pa'>save more with coupons & up to 70% off</p>
        </div>
        <h1 style={{textAlign: 'center', fontSize: '3em', marginTop: '25px'}}>Our Products</h1>
        <div className='shop-product'>
        {products?.map((product) =>  (  
          <div key={product.id} className='product-container2'>
          <Link href={`/shopproduct/${product.slug.current}`}>
          <div className='product-card'>
          <img key={product.id} src={urlFor(product?.image[0]).url()} alt="product-card" width={250} height={250} />
          <p>{product.name}</p>
          <p>${product.price}</p>
          </div>
          </Link>
          
        </div>
      ))}
        </div>
       

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "shopProduct"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  }
}



export default Shop