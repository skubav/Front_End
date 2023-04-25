import React from "react";
import './menuItems.css'

const MenuItem = (props) => {
  return (
    <div className="pubH__menuItem">
      <div className={"pubH__menuItem__wrap" + props.option}>
        <a href={props.menuUrl}>
          <p>{props.menuDisc}</p>
          <p className="pubh_menuItem__wrap_hiddenDisc">{props.menuHiddenDisc}</p>
        </a>
      </div>
    </div>
  )
}

export default MenuItem