import React from 'react';
import Image from 'next/image';
import b1 from '../public/blog/b1.jpg';
import b3 from '../public/blog/b3.jpg';
import b6 from '../public/blog/b6.jpg';
import b2 from '../public/blog/b2.jpg';
import b4 from '../public/blog/b4.jpg';
import Link from 'next/link';
import blog from '../public/banner/b19.jpg';

const Blog = () => {
  return (
    <>
      <div className='page-header-blog' style={{ backgroundImage: `url(${blog.src})` }}>
        <h2>Find Out More</h2>

      </div>   

      <div className='blog'>
        <div className='blog-box'>
          <div className='blog-img'>
            <Image src={b1} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>The cotton zip-up Leggings</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </div>

        <div className='blog-box'>
          <div className='blog-img'>
            <Image src={b3} alt="blog-img1" height={400}/>
          </div>
          <div className='blog-details'>
            <h4>Zanary Collections</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </div>

        <div className='blog-box'>
          <div className='blog-img'>
            <Image src={b6} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>Healthy Living</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </div>

        <div className='blog-box'>
          <div className='blog-img'>
            <Image src={b2} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>Twin Collections</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </div>

        <div className='blog-box'>
          <div className='blog-img'>
            <Image src={b4} alt="blog-img1" height={500}/>
          </div>
          <div className='blog-details'>
            <h4>The cotton zip-up Leggings</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem commodi quo molestias nulla nobis soluta eveniet, laudantium nam architecto perferendis, veniam possimus, voluptatem laboriosam facere debitis. Commodi, omnis architecto!</p>
            <Link href={'./Blog'}>
              <a>CONTINUE READING</a>
            </Link>
          </div>
          <h1>13/01</h1>
        </div>
      </div>
    </>
  )
}

export default Blog