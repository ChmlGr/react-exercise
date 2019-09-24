import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Landing from './routes/Landing';
import Home from './routes/Home';
import UserList from './routes/UserList';
import UserDetail from './routes/UserDetail';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/users' component={UserList} />
      <Route path='/users/:id' component={UserDetail} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
