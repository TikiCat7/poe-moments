import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path={process.env.PUBLIC_URL + '/'} component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
