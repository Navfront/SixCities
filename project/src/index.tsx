import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { LOCATIONS } from './mocks/cities';
import { PLACES } from './mocks/offers';
import cityReducer from './redux/city-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from './redux/logger';

const INIT_CITY_INDEX = 3;

export const initialState = {
  currentCity: {
    name: LOCATIONS[INIT_CITY_INDEX].cityName,
    index: LOCATIONS[INIT_CITY_INDEX].id,
  },
};

export type State = typeof initialState

const store = createStore(cityReducer, composeWithDevTools(applyMiddleware(logger))); // need to clear before deploy

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App places={PLACES} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


