import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import HomeHero from '../assets/home-hero.jpg'
import moment from 'moment'

import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Home = () => {
  const [location, setLocation] = useState('')
  const [types, setTypes] = useState('dogs')
  const [redirect, setRedirect] = useState(false)
  const [checkIn, setCheckIn] = useState(moment())
  const [focused, setFocused] = useState(null)
  // Tomorrow
  const [checkOut, setCheckOut] = useState(moment().add(1, 'days'))

  const handleSubmit = e => {
    e.preventDefault()
    setRedirect(true)
  }

  const formatDate = date => moment(date).format('YYYY-MM-DD')

  return redirect ? (
    <Redirect
      to={`/listings?location=${location.toLowerCase()}&types=${types}&check_in=${formatDate(
        checkIn
      )}&check_out=${formatDate(checkOut)}`}
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
            <label htmlFor="check-in">Check-in</label>
            <DateRangePicker
              startDate={checkIn}
              startDateId="check-in"
              endDate={checkOut}
              endDateId="check-out"
              onDatesChange={({ startDate, endDate }) => {
                setCheckIn(startDate)
                setCheckOut(endDate)
              }}
              focusedInput={focused}
              onFocusChange={focusedInput => setFocused(focusedInput)}
            />

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
