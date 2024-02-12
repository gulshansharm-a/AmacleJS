import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
