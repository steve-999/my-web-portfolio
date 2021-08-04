import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';
import Applications from './components/Applications';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/apps" component={Applications} />
              <Route exact path="/tech" component={Technologies} />
              <Route exact path="/contact" component={Contact} />
              <Route path="*"><Redirect to="/home" /></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
