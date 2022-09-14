import React from 'react';
import ReactDOM from 'react-dom/client';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-exp.css';
import 'spectre.css/dist/spectre-icons.css';
import 'normalize.css/normalize.css';
import './assets/css/index.css';
import './assets/css/App.css';
import App from './base/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { BaseReducer } from './Redux/reducer';

const logger = createLogger();
const rootReducer = combineReducers({ BaseReducer,  });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>        
          <App />        
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
