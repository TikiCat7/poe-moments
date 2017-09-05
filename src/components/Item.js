import React, { Component } from 'react';

const Item = ({ title, src }) => (
  <div className="LandingContent__flex-container__flex-item">
    <div className="LandingContent__items-card">
      <p className="LandingContent__item-title">
       {title}
      </p>
    </div>
    <div className = "LandingContent__item-content">
      <iframe width = "100%"
        height = "100%"
        src = {`https://www.youtube.com/embed/${src}?rel=0&amp;start=80`}
        frameBorder = "0"
        allowFullScreen
      />
    </div>
    <div className="LandingContent__item-content">
      <a className="Button">view</a>
    </div>
  </div>
)

export default Item;