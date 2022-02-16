import React from 'react'
import Link from 'next/link'
const index = () => {
  return (
    <div className="main-wrap">   
    <div className='b-photo'> 
         <h2 className="home-title">
        <p>Welcome to The Mandrills</p>        
      </h2>
      <div className="main-buttons">
      <Link href="/en"><a>Start journy</a></Link>      
      </div>
      </div>
    </div>
  )
}

export default index
