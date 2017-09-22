import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter, Route } from "react-router-dom";
import { Button, Welcome } from '@storybook/react/demo';
import Topbar from '../components/Topbar';
import Item from '../components/Item';
import '../styles/App.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Topbar', module).add('normal', () => (
  <BrowserRouter>
    <Route>
      <Topbar />
    </Route>
  </BrowserRouter>
));

storiesOf('Moment', module).add('default', () => <Item title='Kripp Dies to Double Boss DD' src='aaa'/>)