import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';
import './styles/index.css';

render(
  <Provider store={store} className="provider">
    <App />
  </Provider>,
  document.getElementById('app')
);
