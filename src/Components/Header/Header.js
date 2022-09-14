import React from 'react';
import './header.css'

import logo from '../../assets/images/logo-White.png'

const Header = (props) => {
  return (
        <div className='header p-2'>
           <div className='container'>
            <div className='logo'>
              <img src={logo} alt={logo} />
            </div>
           </div>
        </div>
  );
}

export default Header;