import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moment extends Component {
  state = {  }

  componentWillMount() {
    // fetch data for this moment
  };

  render() {
    return (
        <div className="LandingContent">
          <div className="LandingContent__flex-container">
            <h3>ID: {this.props.match.params.id}</h3>
          </div>
        </div>
    );
  }
}

export default Moment;
