import React, { useState, useEffect } from 'react'
import { LISTINGS } from '../utils/data'
import DatePicker from 'react-datepicker'
import queryString from 'query-string'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const Listing = ({ match, location }) => {
  const id = Number(match.params.id)
  const { search } = location
  const queries = queryString.parse(search)
  const { check_in, check_out } = queries

  const [checkIn, setCheckIn] = useState(moment().valueOf())
  // Tomorrow
  const [checkOut, setCheckOut] = useState(
    moment()
      .add(1, 'days')
      .valueOf()
  )

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

      setCheckIn(new Date(year_in, month_in, day_in))
      setCheckOut(new Date(year_out, month_out, day_out))
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
            <label htmlFor="checkIn">Check-In</label>
            <p>
              <DatePicker selected={checkIn} />
            </p>
            <label htmlFor="checkOut">Check-out</label>
            <p>
              <DatePicker selected={checkOut} />
            </p>
            <p>฿{listing.price} x 2 nights</p>
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
