import React from 'react';
import style from './Navbar.module.css';
import logo from '../../assets/Images/jordanlogo.png';
import Basket from '../Basket/BasketModal/BasketModal';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarItems}>
        
        
        <Link to='/' className={style.logoContainer}>
          <img src={logo} alt="Company Logo" className={style.logoImage} />
          </Link>
      
       
        <div className={style.navLinks}>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
        </div>
        <Basket />
      </div>
    </div>
  );
}
