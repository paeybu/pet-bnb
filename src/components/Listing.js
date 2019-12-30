import React, { useState, useEffect } from 'react'
import { LISTINGS } from '../utils/data'
import queryString from 'query-string'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Listing = ({ match, location }) => {
  const id = Number(match.params.id)
  const { search } = location
  const queries = queryString.parse(search)
  const { check_in, check_out } = queries

  const [focused, setFocused] = useState(null)
  const [checkIn, setCheckIn] = useState(moment())
  // Tomorrow
  const [checkOut, setCheckOut] = useState(moment().add(1, 'days'))

  const [listing, setListing] = useState({})

  useEffect(() => {
    const listing = LISTINGS.find(listing => Number(id) === listing.id)
    setListing(listing)
    setDateIfExist()
    console.log(check_in)
  }, [])

  const setDateIfExist = () => {
    if (check_in && check_out) {
      const year_in = check_in.substr(0, 4)
      const month_in = Number(check_in.substr(5, 2)) - 1
      const day_in = check_in.substr(8, 2)
      const year_out = check_out.substr(0, 4)
      const month_out = Number(check_out.substr(5, 2)) - 1
      const day_out = check_out.substr(8, 2)

      setCheckIn(moment(new Date(year_in, month_in, day_in)))
      setCheckOut(moment(new Date(year_out, month_out, day_out)))
    }
  }
  return (
    <div className="container">
      <div className="listing">
        <img src={listing.img} alt="" style={{ flex: 1 }} />

        <div className="info">
          <h1>{listing.name}</h1>
          <p>{listing.location}</p>
        </div>
        <div className="booking">
          <form>
            <p>฿{listing.price} per night</p>
            <p>{listing.rating}</p>

            <p>฿{listing.price} x 2 nights</p>
            <label>Check-in check-out</label>
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
            <button type="submit" className="btn btn-default">
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Listing
