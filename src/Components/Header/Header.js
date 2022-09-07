import React from 'react';
import './header.css'

const Header = (props) => {
  return (
        <div className='header bg-dark p-2'>
           <div className='container'>
            <h1 className='m-0'>Title Name of <span>page</span></h1>
           </div>
        </div>
  );
}

export default Header;