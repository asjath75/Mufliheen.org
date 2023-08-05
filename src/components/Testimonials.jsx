import './Testimonials.css'

import React from 'react'

export const Testimonials = () => {
  return (
    <div>
        <div>
            <img  className='blog-cover' src={require("../imges/actm-blog-desktop.jpg")}  />
        </div>
        <div className='songs-heading-container'>
            <div className='songs-heading'>
                <h2>Download and Listen our SONGS HERE</h2>
                <h3>Available only in Tamil</h3>
            </div>
        </div>
    </div>
  )
}

export default Testimonials