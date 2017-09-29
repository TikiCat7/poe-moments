import React, { Component } from 'react';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      blur: 0,
    }
  }
  componentDidMount() {

    window.scrollTo(0,0);
    // attach IntersectionObserver to top image
    let options = {
      root: null,
      rootMargin: "-80px 0px 0px 0px",
      threshold: []
    }

    // add threshold from 0.01 - 1
    for(let i=0; i<1.0; i+=0.01) {
      options.threshold.push(i);
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        let box = entry.target;
        let visiblePct = (entry.intersectionRatio * 10);
        this.setState({
          blur: 10 - visiblePct
        })
      });
    }
    this.observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('.Landing__image-section');
    this.observer.observe(target);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    return (
      <div style={{ marginTop: '80px'}}>
        <section className="Landing__image-section">
          <div className="Landing__content"  style={{filter: `blur(${this.state.blur}px)`}}/>
          <div className="Landing__aboveContent">Your favorite Poe moments.</div>
        </section>
        <section className="Landing__section Landing__section__light">Section 1</section>
        <section className="Landing__section">Section 2</section>
        <section className="Landing__section Landing__section__light">Section 3</section>
      </div>
    );
  }
}

export default Landing;