import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter, Route } from "react-router-dom";
import { Button, Welcome } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import { withInfo } from '@storybook/addon-info';

import testReadMe from '../docs/test.md';
import emojiReadMe from '../docs/emoji.md';
import Topbar from '../components/Topbar';
import Item from '../components/Item';
import '../styles/App.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Topbar', module)
  .add('normal', () => (
    <BrowserRouter>
     <Route>
       <Topbar />
     </Route>
    </BrowserRouter>
  ));

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);
stories.add('default', () => <Item title={text('title', 'Kripp dies to double boss DD')} src={text('video src', 'KYUm0qM_R0g')}/>)

storiesOf('readMe & linking', module)
  .add('With ReadME', withReadme(testReadMe, () => <Button onClick={linkTo('readMe & linking','With some emoji')} label="Hello Button"> Hello </Button>))
  .add('With some emoji', withReadme(emojiReadMe, () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>));

const stories2 = storiesOf('With Info Example', module);
stories2.addDecorator(withKnobs);
stories2.add('simple info example',
  withInfo({
    text: 'String or React Element with docs about my component'
  })(() =>
    <Button>Hey</Button>
  )
)
.add('Moment Item', withInfo({
  text: 'A single item representing one moment.'
})(() => (
  <Item title={text('title', 'Kripp dies to double boss DD')} src={text('video src', 'KYUm0qM_R0g')} />)
))