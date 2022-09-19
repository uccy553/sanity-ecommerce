import { client } from '../lib/client';
import { Hero, Features, Products, Banner, NewArrivals, FooterBanner  } from '../components';

const Home = ({ products, bannerData, newArrivalsData }) => {
  return (
    <div>
      <Hero />
      <Features />
      <div className='product-container'>
            <h2>Featured Products</h2>
            <p>summer collection new modern design</p>
            <div className='product-con'>
            {products?.map((products) => <Products key={products._id} products={products} /> )}
            </div>
        </div>

        <Banner banner={bannerData && bannerData[0]}/>

        <div className='product-container1'>
            <h2>New Arrivals</h2>
            <div className='product-con'>
                {newArrivalsData?.map((product) => <NewArrivals key={product._id} product={product} /> )}
            </div>
        </div>

        <FooterBanner />
    </div>
  )
}



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const newArrivalsQuery = '*[_type == "newArrivals"]';
  const newArrivalsData = await client.fetch(newArrivalsQuery)

  return {
    props: { products, bannerData, newArrivalsData }
  };
}

export default Home