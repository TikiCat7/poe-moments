import React, { Component } from 'react';

import Item from './Item';

class MomentList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="LandingContent">
        <div className="LandingContent__flex-container">
          <Item
            id="krippdoubleboss"
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            id="worldfirstatziriHC"
            title="#2 World first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            id="worldfirstatziriHC"
            title="#3 Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
        <div className="LandingContent__flex-container">
          <Item
            id="krippdoubleboss"
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            id="worldfirstatziriHC"
            title="#2 World first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            id="worldfirstatziriHC"
            title="#3 Wrold first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
        </div>
        <div className="LandingContent__flex-container">
          <Item
            id="krippdoubleboss"
            title="#1 Kripps Double Boss Death"
            description="The most iconic moment in POE history"
            src="KYUm0qM_R0g"
          />
          <Item
            id="worldfirstatziriHC"
            title="#2 World first atziri kill HC"
            description="Atziri down by atziri"
            src="0AJdVgzVMLo"
          />
          <Item
            id="worldfirstatziriHC"
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