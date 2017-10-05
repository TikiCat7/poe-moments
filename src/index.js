import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
    <Route exact path='' component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
