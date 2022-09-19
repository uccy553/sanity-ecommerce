import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='news-text' style={{marginLeft: '30px'}}>
            <h1 style={{fontSize: '2em', color: '#fff'}}>Sign Up For Newsletter</h1>
            <p style={{color: '#fff'}}>Get email update about our latest shop and <span style={{color:'yellow'}}>special offer</span></p>
        </div>
        <div className='form' style={{marginRight: '30px'}}>
            <input type="text" placeholder='your email address' style={{width: '400px'}} />
            <button style={{width: '100px', padding: '10px', border: 'none', borderRadius: '10px'}}>Sign Up</button>
        </div>
    </div>
  )
}

export default Newsletter