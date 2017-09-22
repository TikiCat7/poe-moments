import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IntersectionObserverComponent extends Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
    target: PropTypes.string.isRequired,
  }

  state = {
    visible: 0,
  }

  componentDidMount() {
    // attach IntersectionObserver to top image
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [],
    };

    // add threshold from 0.01 - 1
    for (let i = 0; i < 1.0; i += 0.01) {
      options.threshold.push(i);
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        const visiblePct = (entry.intersectionRatio);
        this.setState({
          visible: visiblePct,
        });
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector(`#${this.props.target}`);
    observer.observe(target);
  }

  render() {
    return (
      <div>{this.props.children(this.state.visible)}</div>
    );
  }
}

IntersectionObserverComponent.propTypes = {
  children: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
};

export default IntersectionObserverComponent;
