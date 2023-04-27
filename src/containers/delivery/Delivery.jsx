import React from "react";
import './delivery.css'
import beer from "../../assets/images/pubH_beer.png"

const Delivery = () => {
  return (
    <div className="pubH__delivery">
      <div className="pubH__delivery_titleContainer">
        <p className="pubH__delivery_titleContainer_textPart1">Доставка</p>
        <p className="pubH__delivery_titleContainer_textPart2">Додому</p>
        <div className="pubH__delivery_titleContainer_img">
          <span>__________</span>
          <img src={beer} alt="beer" />
          <span>__________</span>
        </div>
      </div>
      <div className="pubH__delivery_deliveryInfo">
        <div className="pubH__delivery_deliveryInfo_text">
          <div className="ubH__delivery_deliveryInfo_text_part1">
            <p className="pubH__delivery_deliveryInfo_text_bold">Приймаємо замовлення на доставку та самовивіз:</p>
            <p>Пн-нд 12:00 – 23:30</p>
            <p>Замовлення оформляється по номеру телефона :</p>
            <p>
              <a href="tel:0500300199">+38 (050) 03 00 199</a>.
            </p>
            <p>Номер для бронювання столів та інформаційний :</p>
            <p>
              <a href="tel:0992139424">+38 (099) 21 39 424</a>.
            </p>
          </div>
          
          <div>
            <p className="pubH__delivery_deliveryInfo_text_bold">Вартість</p>
            <p>Доставка БЕЗКОШТОВНА від 500 грн в межах міста. <br/>На доставку всі знижки та сертифікати знімаються.</p>
            <p className="pubH__delivery_deliveryInfo_text_bold">Час доставки</p>
            <p>Доставляємо протягом години, або трохи більше чи навіть трохи швидше (залежно від загруженості залу).</p>
            <p className="pubH__delivery_deliveryInfo_text_bold">Оплата</p>
            <p>Кур’єру після отримання замовлення.</p>
          </div>
        </div>
        <div className="pubH__delivery_deliveryInfo_img"></div>
      </div>
    </div>
  )
}

export default Delivery