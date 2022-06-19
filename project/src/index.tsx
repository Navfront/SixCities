import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { PLACES } from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App places={PLACES} />
  </React.StrictMode>,
  document.getElementById('root'),
);
