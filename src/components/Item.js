import React, { Component } from 'react';

const Item = ({ title }) => (
  <div className="LandingContent__flex-container__flex-item" >
    <div className="LandingContent__items-card">
      <div className="LandingContent__item-content">
        <p>{title}</p>
      </div>
      <div className="LandingContent__item-content">
        <p>{title}</p>
      </div>
    </div>
    <div className="LandingContent__item-content">
      <a className="Button">view</a>
      <a className="Button">share</a>
      <a className="Button">vote</a>
    </div>
  </div>
)

export default Item;