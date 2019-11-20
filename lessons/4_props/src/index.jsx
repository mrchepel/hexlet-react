import ReactDOM from 'react-dom';
import React from 'react';

import Card from './Card';

const title = 'Title';
const text = 'Description';

ReactDOM.render(
  <Card title={title} text={text} />,
  document.getElementById('container'),
);
