import React from 'react';
import Image from 'next/image';
import Features from '../components/Features';
import about from '../public/about/about.png';
import people1 from '../public/people/peeps2.png';
import people2 from '../public/people/peeps4.jpg';
import people3 from '../public/people/peeps1.jpg';
import banner from '../public/about/banner.png';


const About = () => {
  return (
    <>
    <div className='page-header3' style={{ backgroundImage: `url(${banner.src})` }}>
       <h2 style={{color: '#fff'}}>#KnowUs</h2>  
        <p style={{color: '#fff'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea cumque dolor explicabo in error ut, facilis provident numquam, nam  </p>
    </div>

    <div className='about-head'>
      <Image src={about} alt="about us" width={4000} height={2500} />
      <div>
        <h2>Who we are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sapiente vel accusamus a soluta. Enim quam nobis in explicabo id dolor dolorum sit, distinctio, qui ab, aut similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsa aut soluta fuga molestiae porro nostrum vitae facilis assumenda ipsam! Aspernatur at deleniti et vel distinctio eos temporibus sint voluptatum.</p><abbr title="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, aliquid rem quod commodi aliquam saepe laudantium libero reiciendis, debitis eligendi quisquam eos eius nobis aut perspiciatis praesentium a harum sunt? lo</abbr>

        <br /><br />
        <marquee bgcolor="#ccc" behavior="alternate" scrolldelay="100" scrollamount="5" width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus. Sunt doloribus consequuntur aliquam!</marquee>
      </div>
    </div>

    <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>Our people</h1>
    <div className='ourPeople'>
      <div>
        <Image src={people1} alt="people1" className="about-img" />
        <h4>Amanda Hoos</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </div>

      <div>
        <Image src={people2} alt="people1" className="about-img" />
        <h4>Lisa Lou</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </div>
      <div style={{ marginBottom: 100 }}>
        <Image src={people3} alt="people1" className="about-img" />
        <h4>Jessica Anos</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint exercitationem, error ad vitae enim? Obcaecati, eius nemo. Consequatur id perferendis assumenda provident aut delectus minus.</p>
      </div>
    </div>

    <Features />
    
    </>


  )
}

export default About
