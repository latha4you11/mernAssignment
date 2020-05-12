import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CreateForm from './components/createForm'
import EditForm from './components/editForm'
import ShowForm from './components/showForm'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <h2>WaterLabs Database</h2>
          </nav> <br/>
          <Switch>
              <Route exact path='/create' component={ CreateForm } />
              <Route path='/edit/:id' component={ EditForm } />
              <Route path='/' component={ ShowForm } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
