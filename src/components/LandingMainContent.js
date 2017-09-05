import React, { Component } from 'react';

import Item from './Item';

class LandingMainContent extends Component {
  render() {
    return (
      <div className="LandingContent">
        <div className="LandingContent__flex-container">
          <Item
            title="Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            title="Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            title="Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
        <div className="LandingContent__flex-container">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="LandingContent__flex-container">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default LandingMainContent;