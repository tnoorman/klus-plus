import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SplashScreen from './Components/SplashScreen';
import RequestRepair from './Components/RequestRepair';
import ClientInfo from './Components/ClientInfo';
import UserProfile from './Components/UserProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SplashScreen />
          </Route>
          <Route path="/clientinfo">
          <ClientInfo />
        </Route>
        <Route path="/request-repair">
          <RequestRepair />
        </Route>
        <Route path="/request-repair">
          <RequestRepair />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
