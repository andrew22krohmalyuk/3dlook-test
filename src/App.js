import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'routes';
import store from 'store';
import { Drawer } from 'components';
import 'assets/styles/reset.css';
import './App.scss';

console.log(process.env.NODE_ENV);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
        <Drawer />
      </div>
    </Provider>
  );
}

export default App;
