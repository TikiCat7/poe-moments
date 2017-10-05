import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/App.css';

import Topbar from './Topbar'
import MomentList from './MomentList';
import Landing from './Landing';
import Moment from './Moment';

const Layout = ({ children }) => (
  <section className="App">
   <Topbar />
    {children}
  </section>
);
const PageFade = (props) => {
  console.log(props)
  return (
    <CSSTransition
      {...props}
      classNames="fadeTranslate"
      timeout={1000}
    />
  )
};

const App = (props) => {
  const locationKey = props.location.pathname

  return (
    <Layout>
      <TransitionGroup>
        <PageFade key={locationKey}>
          <section className="fix-container">
            <Switch location={props.location}>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
              <Route exact path={process.env.PUBLIC_URL + '/momentlist'} component={MomentList} />
              <Route  path={process.env.PUBLIC_URL + '/moment/:id'} component={Moment} />
            </Switch>
          </section>
        </PageFade>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
