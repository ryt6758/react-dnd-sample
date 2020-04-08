import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import thunk from 'redux-thunk'
import reducer from './reducers'
import './index.css'

import Input from './components/Input';
import List from './components/List'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Input />
      <List />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
