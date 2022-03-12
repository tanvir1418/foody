import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gwnfuhywcvf7jrordlk0"
        alt="Foody-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-br-marker absolute-center location-icon"></i>
              <div>Bogra</div>
            </div>
            <i className="fi fi-br-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i className="fi fi-br-search absolute-center search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">Tanvir</span>
          <i class="fi fi-br-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
