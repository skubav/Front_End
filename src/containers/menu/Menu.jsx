import React from "react";
import './menu.css'
import hop from "../../assets/images/pubH__hop.png"
import MenuItem from "../../components/menuItems/MenuItems";

const Menu = () => {
  return (
    <div className="pubH__menu">
      <div className="pubH__menu_titleContainer">
        <div className="pubH__menu_titleContainer_textPart1">Меню</div>
        <div className="pubH__menu_titleContainer_textPart2">НАШОГО ЗАКЛАДУ</div>
        <div className="pubH__menu_titleContainer_img">
          <span>__________</span>
          <img src={hop} alt="hop" />
          <span>__________</span>
        </div>
      </div>
      <div className="pubH_menu_redirection">
        <MenuItem option={" pubH__menuItem1"} menuUrl="#menuSite" menuDisc="Меню" menuHiddenDisc="Переглянути"/>
        <MenuItem option={" pubH__menuItem2"} menuUrl="#menuBarSite" menuDisc="Барне меню" menuHiddenDisc="Переглянути"/>
        <MenuItem option={" pubH__menuItem3"} menuUrl="#menuBanketSite" menuDisc="Банкетне меню" menuHiddenDisc="Переглянути"/>
      </div>
    </div>
  )
}

export default Menu