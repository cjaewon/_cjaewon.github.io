import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
