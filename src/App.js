import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home'
import About from './About'
import Users from './Users'

import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="home-button">Home</Link>
            </li>
            <li>
              <Link to="/about" className="about-button">About</Link>
            </li>
            <li>
              <Link to="/users" className="users-button">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

