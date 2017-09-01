import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';

import BoardContainer from './components/board/BoardContainer';
import createBrowserHistory from 'history/lib/createBrowserHistory';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
  <Route component={App}>
    <Route path="/" component={BoardContainer}>
      
    </Route>
  </Route>
</Router>, document.getElementById('main-content'));
registerServiceWorker();
