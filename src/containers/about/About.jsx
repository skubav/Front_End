import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="pubH__about">
      <div className="pubH__about__img1"></div>
      <div className="pubH__about__img2"></div>
      <div className="pubH__about__img3"></div>
      <div className="pubH__about__text">
        <h1 className="pubH__about__text_about">Про нас</h1>
        <h2 className="pubH__about__text_pubH">ПАБ ХАУС</h2>
        <p className="pubH__about__text_textpart1">Pub Hous – пивний ресторан в Ужгороді. Великий вибір пива, гриль меню, піцца, приємна атмосфера. Тут ви зможете по справжньому відпочити і добре провести час.</p>
        <p className="pubH__about__text_textpart2">В основному залі та на терасі можна зручно розташуватися великою компанією та весело провести час, замовивши «метр пива» або затишно посидіти, насолоджуючись різноманітністю кухні.</p>
      </div>
    </div>
  )
}

export default About