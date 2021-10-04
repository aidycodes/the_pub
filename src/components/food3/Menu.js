import React from "react";
import menu from './menu.css'
 
const Menu = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
      <img className="menuimg" src="https://www.nicepng.com/png/full/648-6486024_terrapin-grille-niagara-falls-menu-xbox-one.png"/>
      </div>
    </div>
  );
};
 
export default Menu;