import React from 'react'

const Mainsec = () => {
  return (
    <div className='main'>
        <div className="main-content">
            <h1>YOUR FEET DESERV THE BEST</h1>
            <p>YOUR FEET DESERV THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERV THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.  </p>

            <div className="main-button">
            <button className='btn1'>Shop Now</button>
            <button className='btn2'>Category</button>
            
            </div>
            <div className="shop">
                <p>ALSO AVILABLE ON</p>
                <div className='shop-icons'>
                    <img src="/myimages/amazon.png" alt="amazon" width={50} />
                    <img src="/myimages/flipkart.png" alt="flipkart" width={40} />
                </div>
            </div>
        </div>
        <div className="main-img">
            <img src="/myimages/nikeshoes.png" alt="nikeshoes" width={580} />

        </div>
      
    </div>
  )
}

export default Mainsec
