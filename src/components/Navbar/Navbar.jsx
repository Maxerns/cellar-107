import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

const closeMenu = () => {
      setToggleMenu(false);
  };

 return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.cellar107} alt="app logo"/>
    </div>
    <ul className="app__navbar-links">
      <li className="app__navbarbuttons"><a href="#home">Home</a></li>
      <li className="app__navbarbuttons"><a href="#aboutus">About Us</a></li>
      <li className="app__navbarbuttons"><a href="#menu">Menu</a></li>
      <li className="app__navbarbuttons"><a href="#contact">Contact</a></li>
      <div />
    </ul>
    <div className="app__navbar-booking">
      <p href="/" className="p__diphy" style={{fontWeight: '700'}}>Book Table</p>
    </div>
    <div className ="app__navbar-smallscreen">
     <GiHamburgerMenu color="#D4CAB6" fontSize={27} onClick={() => setToggleMenu(true)}/>
     

    {toggleMenu && (
     <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu color="#D4CAB6" fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
     <ul className="app__navbar-smallscreen_links">
      <li className="p__diphy"><a href="#home" onClick={closeMenu}>Home</a></li>
      <li className="p__diphy"><a href="#aboutus" onClick={closeMenu}>About Us</a></li>
      <li className="p__diphy"><a href="#menu" onClick={closeMenu}>Menu</a></li>
      <li className="p__diphy"><a href="#contact" onClick={closeMenu}>Contact</a></li>
      <li className="p__diphy"><a href="/" onClick={closeMenu}>Book Table</a></li>
    </ul>
    </div>
    )}
    </div>
  </nav>
  )
 }

export default Navbar;
