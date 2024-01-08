import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bookReducer } from './store/books';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
// import {composeWithDevTools} from '@redux-devtools/extentions';
import { composeWithDevTools } from 'redux-devtools-extension';

const myStore = createStore(bookReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
