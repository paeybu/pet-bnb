import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import HomeHero from '../assets/home-hero.jpg'

const Home = () => {
  const [location, setLocation] = useState('')
  const [types, setTypes] = useState('dogs')
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setRedirect(true)
  }

  return redirect ? (
    <Redirect
      to={`/listings?location=${location.toLowerCase()}&types=${types}`}
    />
  ) : (
    <div className="home">
      <div
        className="full-height"
        style={{ background: `url(${HomeHero})`, backgroundSize: 'cover' }}
      >
        <form onSubmit={handleSubmit}>
          <div className="search">
            <h1>Search for a place for your pets to stay</h1>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="types">Types</label>
            <select
              name="types"
              id="types"
              value={types}
              onChange={e => setTypes(e.target.value)}
            >
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
            </select>
            <button className="btn btn-default" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
