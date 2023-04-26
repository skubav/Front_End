import React from "react";
import './menuItems.css'

const MenuItem = (props) => {
  return (
    <div className="pubH__menuItem">
      <a id={props.menuWrapperId} href={props.menuUrl} className={"pubH__menuItem__wrapper" + props.menuClassName}>
        <div id={props.menuBorderId} className="pubH__menuItem__wrapper__border">
          <p>{props.menuDisc}</p>
          <p id={props.menuHiddenDiscId} className="pubH__menuItem__wrapper__hiddenDisc">{props.menuHiddenDisc}</p>
        </div>
      </a>
    </div>
  )
}

export default MenuItem