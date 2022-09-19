import React, { useState } from 'react';
import { urlFor, client } from '../../../lib/client';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useStateContext } from '../../../context/StateContext';
import { NewArrivals } from '../../../components';
import Link from 'next/link';



const ProductDetails = ({ pro2, pro1 }) => {
    const { image, name, details, price } = pro2 || {};
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    const handleBuyNow = () => {
        onAdd(pro2, qty);
    }

  return (
    <div>
    
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    {image && (
                         <img src={urlFor(image && image[index]).url()} alt='' className='product-detail-image' />
                    )}
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img key={i} src={urlFor(item).url()} alt="small-image" className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)} />
                    ))}
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
            <div className='reviews'>
                <div>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarOutlineIcon />
                </div>
                <p>(20)</p>
                </div>
                <h4>Details: </h4>
                <p>{details}</p>
                <p className='price'>${price}</p>
                <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty}><RemoveIcon /></span>
                        <span className='num' onClick="">{qty}</span>
                        <span className='plus' onClick={incQty}><AddIcon /></span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type="button" className='add-to-cart' onClick={() => onAdd(pro2, qty)}>Add to Cart</button>
                    <Link href={`/Carts`}>
                        <div>
                        <button type="button" className='buy-now' onClick={handleBuyNow}>Buy Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='maylike-products-wrapper'>
            <h2>You may also like</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>{pro1.map((item) => (
                    <NewArrivals key={item._id} product={item} />
                ))}</div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "newArrivals"]{
        slug {
            current
        }
    }
    `;


    const prod = await client.fetch(query);
    const paths = prod?.map((pro) => ({
        params: {
            slug: pro.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "newArrivals" && slug.current == '${slug}' ][0]`;
    const productQuery = '*[_type == "newArrivals"]'
    const pro2 = await client.fetch(query);
    const pro1 = await client.fetch(productQuery);
   
  
    return {
      props: { pro2, pro1}
    }
  }

export default ProductDetails