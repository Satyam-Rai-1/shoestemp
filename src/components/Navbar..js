import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="myimages/nikelogo.png" alt="logo" width={100} />
        </div>

        <ul>
          <li href= '#'>Menu</li>
          <li href= '#'>Location</li>
          <li href= '#'>About</li>
          <li href= '#'>Contact</li>
        </ul>

        <button>Login </button>
      </nav>
    </div>
  )
}

export default Navbar
