import React from 'react';

import HomePageComponent from './pages/Home';

import './assets/sass/main.scss';

import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <main>
        <HomePageComponent />
      </main>
    </Provider>
  );
}

export default App;
