import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import User from './components/User';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:id" component={User} exact />
      </Switch>
    </Router>
  );
}

export default App;
