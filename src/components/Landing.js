import React, { Component } from 'react';

class Landing extends Component {
  state = { text: 'welcome to POE moments ;)'  }
  render() {
    return (
      <div style={{ marginTop: '80px'}}>
        <p>
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default Landing;