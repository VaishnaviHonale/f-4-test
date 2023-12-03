import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import './App.css'; 
function App() {
  return (
    <Router>
      
      <div className="contain">
        <h2>Dictionary App</h2>
        <Navbar /> 
         <Switch>
          
          <Route  exact path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route  path="/word/:word" component={WordDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
