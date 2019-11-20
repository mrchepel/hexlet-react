import ReactDOM from 'react-dom';
import React from 'react';

import Definitions from './Definitions';

const definitions = [
  { dd: 'one', dt: 'two' },
  { dd: 'another term', dt: 'another description' },
];

ReactDOM.render(
  <Definitions data={definitions} />,
  document.getElementById('container'),
);
