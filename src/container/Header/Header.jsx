import React from 'react';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Cellar107</h1>
      <div>
        <p className="app__address">107A Rosendale Rd, Norwood, London SE21 8EZ</p>
      </div>
      <button type="button" className="custom__button">
       <a href="#menu" style={{ textDecoration: 'none', color: 'inherit' }}>
         View Menu
       </a>
     </button>
    </div>
  </div>
);

export default Header;
