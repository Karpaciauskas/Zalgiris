import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from './containers/App';
import mainStore from "./store"

const store = mainStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
    </Provider>,
    document.getElementById('app')
  );