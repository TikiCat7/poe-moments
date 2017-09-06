import React, { Component } from 'react';

const Item = ({ title, src }) => (
  <d className="LandingContent__flex-container__flex-item">
    <p className="LandingContent__item-title">
      {title}
    </p>
    <div>
      <ul className="LandingContent__item-content LandingContent__item-content__tags">
        <li className="Tag">
          <img className="Tag__tag-image" src='https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/9/98/Imprint_inventory_icon.png?version=37acb262a7ec480e4eb207b7d50d9393' />
          <span className="Tag__tag-name">Onslaught</span>
        </li>
        <li className="Tag">
          <img className="Tag__tag-image" src='https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/9/98/Imprint_inventory_icon.png?version=37acb262a7ec480e4eb207b7d50d9393' />
          <span className="Tag__tag-name">Onslaught</span>
        </li>
        <li className="Tag">
          <img className="Tag__tag-image" src='https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/9/98/Imprint_inventory_icon.png?version=37acb262a7ec480e4eb207b7d50d9393' />
          <span className="Tag__tag-name">Onslaught</span>
        </li>
        <li className="Tag">
          <img className="Tag__tag-image" src='https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/9/98/Imprint_inventory_icon.png?version=37acb262a7ec480e4eb207b7d50d9393' />
          <span className="Tag__tag-name">Onslaught</span>
        </li>
        <li className="Tag">
          <img className="Tag__tag-image" src='https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/9/98/Imprint_inventory_icon.png?version=37acb262a7ec480e4eb207b7d50d9393' />
          <span className="Tag__tag-name">Onslaught</span>
        </li>
        <li className="Tag">
          <img className="Tag__tag-image" src="https://pathofexile.gamepedia.com/media/pathofexile.gamepedia.com/d/de/Detonate_Dead_skill_icon.png?version=68ca42c95c1b6bf2b73a0f340cd92548" />
          <span className="Tag__tag-name">Detonate Dead</span>
        </li>
      </ul>
    </div>
    <div className= "LandingContent__items-card LandingContent__items-card__video">
      <iframe width = "95%"
        height = "90%"
        src = {`https://www.youtube.com/embed/${src}?rel=0&amp;start=80`}
        frameBorder = "0"
        allowFullScreen
      />
    </div>
    <div className="LandingContent__item-content">
      <a className="Button">view</a>
    </div>
  </d>
)

export default Item;