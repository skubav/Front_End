import React from "react";
import './navbar.css'
import logo from '../../assets/images/pubH__logo.png'



const Navbar = () => {
  return (
    <div className="pubH__navbar">
      <div className="pubH__navbar-links">
        <div className="pubH__navbar-links__logo">
          <a href="#header">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="pubH__navbar-links__container">
          <p><a href="#header">ГОЛОВНА</a></p>
          <p><a href="#about">ПРО НАС</a></p>
          <p><a href="#menu">МЕНЮ</a></p>
          <p><a href="#delivery">ДОСТАВКА</a></p>
          <p><a href="#promo">АКЦІЇ</a></p>
          <p><a href="#gallery">ГАЛЕРЕЯ</a></p>
          <p><a href="#comments">ВІДГУКИ</a></p>
          <p><a href="#contacts">КОНТАКТИ</a></p>
        </div>
        <div className="pubH__navbar-links__meta">
          <div className="pubH__navbar-links__meta_fbook"></div>
          <div className="pubH__navbar-links__meta_insta"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar