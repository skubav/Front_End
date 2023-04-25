import React from "react";
import './header.css'
import { Navbar } from "../../components";
import beerLine from '../../assets/images/pubH__beer-line.png'

const Header = () => {
  return (
    <div className="pubH__header">
      <Navbar />
      <div className="pubH__header__main">
        <h1>PUB HOUSE</h1>
        <img src={beerLine} alt="beerLine" />
        <h2>МНЯСО АЙ ПАЛЕНКА</h2>
        <div className="pubH__header__main__desc">ПЕРШИЙ ЗАКАРПАТСЬКИЙ ПАБ</div>
      </div>
      <div className="pubH__header__additionalBg">
      </div>
      <div className="pubH__header__intro">
        <div className="pubH__header__intro__animationFromLeft">
          <div className="pubH__header__intro__animationFromLeft__menu">
            Меню нашого закладу
          </div>
        </div>
        <div className="pubH__header__intro__animationFromRight">
          <div className="pubH__header__intro__animationFromLeft__delivery">
            Доставка додому
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header