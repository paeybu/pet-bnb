import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Listings from './components/Listings'
import Listing from './components/Listing'
import Navbar from './components/Navbar'
import HostLogin from './components/host/HostLogin'
import AuthContext from './contexts/AuthContext'
import HostDashboard from './components/host/HostDashboard'

function App() {
  const [authUser, setAuthUser] = useState(null)

  return (
    <div>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={Listings} />
            <Route path="/listings/:id" component={Listing} />
            <Route exact path="/host" component={HostLogin} />
            <Route path="/host/dashboard" component={HostDashboard} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
