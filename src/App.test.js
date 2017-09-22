import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from "react-router-dom";
import IntersectionObserver from 'intersection-observer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>, div);
});
