import React, { Component } from 'react';
import chaos_orb from '../images/chaos.jpeg';

class Topbar extends Component {
  render() {
    return (
      <div className='Topbar'>
        <span className='Topbar__menu-button' />
        <span className="Topbar__title">POE Moments</span>
      </div>
    );
  }
}

export default Topbar;
