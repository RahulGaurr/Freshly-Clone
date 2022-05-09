import React from 'react'

import "./Navbar.css"

const Navbar2 = () => {
  return (
    
    <nav>
      
            <div>
                <img className="nav_img" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt=""/>
            </div>
            <div  className="nav_menu">Plans & Menu</div>
            <div  className="nav_menu">How it Works</div>
            <div  className="nav_menu">Gifts</div>
            <div  className="nav_menu"> Refer a Friend</div>
            <div  className="nav_menu">Help</div>
            <div  className="nav_menu">Cart</div>
            
            <div className="btn_login">Login</div>
              <button className="btn_signup">Sign Up</button>
                    
    </nav>
  )
}

export {Navbar2}