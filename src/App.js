import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Listings from './components/Listings'
import Listing from './components/Listing'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listings" component={Listings} />
          <Route path="/listings/:id" component={Listing} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
