import React, { Component } from 'react';

import Item from './Item';

class MomentList extends Component {
  render() {
    return (
      <div className="LandingContent">
        <div className="LandingContent__flex-container">
          <Item
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            title="#2 World first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            title="#3 Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
        <div className="LandingContent__flex-container">
          <Item
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
              src="KYUm0qM_R0g"
            />
          <Item
          title="#2 World first atziri kill HC"
          description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            title="#3 Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
        <div className="LandingContent__flex-container">
          <Item
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            title="#2 World first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            title="#3 Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
      </div>
    );
  }
}

export default MomentList;