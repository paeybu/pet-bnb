import React, { useState, useContext } from 'react'
import { HOST_USERS } from '../../utils/data'
import { Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

const HostLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { authUser, setAuthUser } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()

    const user = HOST_USERS.find(user => user.email === email)

    if (user !== undefined) {
      if (password === user.password) {
        setError(null)
        setAuthUser(user)
      } else setError('Wrong password')
    } else {
      setError('Wrong email')
    }
  }

  return authUser ? (
    <Redirect to="/host/dashboard" />
  ) : (
    <div className="container">
      {error && <h1 className="error">Error: {error}</h1>}
      <form onSubmit={handleSubmit}>
        <div className="host-login">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default HostLogin
