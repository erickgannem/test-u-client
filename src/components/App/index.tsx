import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from '../Navbar'
import Home from '../../pages/Home'
import Places from '../../pages/Places'
import UserDetails from '../../pages/UserDetails'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/user">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
