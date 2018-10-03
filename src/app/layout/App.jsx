import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Route path='/events' component={EventDashboard} />
        </Container>
        
      </div>
    );
  }
}

export default App;

