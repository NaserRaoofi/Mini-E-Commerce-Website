import React from 'react'
import style from './Header.module.css'
import logo from '../../../assets/Images/logo3.webp';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className={style.header}>
        <Link to='/'>
      <div className={style.logoContainer}>
        <img src={logo} alt="Company Logo" className={style.logoImage} />
      </div>
      </Link>
      <div className={style.marqueeContainer}>
        <div className={style.marquee}>
          <span>We have 50% off on all items! Limited time offer!</span>
        </div>
      </div>
      <div className={style.sloganContainer}>
        <span className={style.sloganText}>Nike is The Best Sport Brand</span>
      </div>
      </div>
    </div>
  )
}
