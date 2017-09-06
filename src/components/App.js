import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/App.css';

import Topbar from './Topbar'
import MomentList from './MomentList';
import Landing from './Landing';

const App = withRouter(({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };

  return (
    <div className="App">
      <Topbar />
      <TransitionGroup>
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/momentlist" component={MomentList} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
});

export default App;
