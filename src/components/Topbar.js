import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Topbar extends Component {
  render() {
    return (
      <section className="Topbar-container">
        <div className='Topbar'>
          <span className='Topbar__menu-button' />
          <img width="50px" height="50px" src="http://i.imgur.com/gUqNmRN.gif" />
          <span className="Topbar__title">POE Moments DEPLOYED</span>
          <Link className="Topbar__link" to="/">Home</Link>
          <Link className="Topbar__link" to="/momentlist">List</Link>
        </div>
      </section>
    );
  }
}

export default Topbar;
