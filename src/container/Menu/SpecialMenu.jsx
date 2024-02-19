import React from 'react';

import { images } from '../../constants';
import './SpecialMenu.css';

const ButtonClickFood = () => {
  window.location.href = 'https://maxerns.files.wordpress.com/2024/01/cellar107-a-la-carte.pdf';
};

const ButtonClickDrink = () => {
window.location.href = 'https://maxerns.files.wordpress.com/2024/01/cellar107-drinks.pdf'

};

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__messi">Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        
        <div className="app__specialMenu_menu_items">
        </div>
      </div>

      <div className="app__specialMenu-foodmenu_img">
        <img src={images.foodMenu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-winemenu_img">
        <img src={images.wineMenu} alt="menu__img" />
      </div>

      
     
    </div>

    <div className="app__foodbutton">
    <button type="button" className="custom__button" onClick={ButtonClickFood}>
      A La Carte
    </button>
  </div>

    <div className="app__drinksbutton">
      <button type="button" className="custom__button" onClick={ButtonClickDrink}>Drinks</button>
    </div>

  </div>
);

export default SpecialMenu;