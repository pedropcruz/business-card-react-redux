import React from 'react';
import ReactDOM from 'react-dom';

import HomePageComponent from './pages/Home';

import './assets/sass/main.scss';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
        <HomePageComponent />
      </main>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
