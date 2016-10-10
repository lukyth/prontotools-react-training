import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux Stuff
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
