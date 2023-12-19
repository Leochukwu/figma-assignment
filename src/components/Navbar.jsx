import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='nav_general'>
        <div className='nav_rbox'> 
        <div className='small_box'></div>
        <div className='logo_text'>XYZ</div>
        </div>
        <div className='nav_links'>
            <a href='#'>Overview </a>
            <a href='#'>Feature </a>
            <a href='#'>About </a>
            <a href='#'>Price </a>
        </div>
        <div className='nav_buttons'>
            <div className='ll'>          <img src="./assets/web_logo.svg" alt="" srcset="" />
            <p>Language</p></div>
            <p className='signup'>Signup</p>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
