import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbar/navbar.css';
import Banner from '../Banner/Banner';

const Navbar = () => {
  return (
    <div className='navbarContainer container'>
      <div className='banner'><Banner /></div>
      <hr />
      <div className='navbar global_flex '>
        <h3>logo</h3>
        <ul className='navlinks'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/our-company'>Our Company</NavLink></li>
          <li><NavLink to='/procedure'>Procedure</NavLink></li>
          <li><NavLink to='/advertisment'>Advertisment</NavLink></li>
          <li><NavLink to='/why-us'>Why Us?</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
