import React from 'react';
import ReactDOM from 'react-dom';
import { receivePoke, requestPoke } from './actions/pokemon_actions';
import { fetchPoke } from './util/api_util';
import configureStore from './store/store';
import { selectPoke } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.receivePoke = receivePoke;
  window.fetchPoke = fetchPoke;
  window.requestPoke = requestPoke;
  window.selectPoke = selectPoke;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
