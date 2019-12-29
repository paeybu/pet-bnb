import React, { useState, useEffect } from 'react'
import { LISTINGS } from '../utils/data'

const Listing = ({ match }) => {
  const id = Number(match.params.id)
  const [listing, setListing] = useState({})

  useEffect(() => {
    const listing = LISTINGS.find(listing => Number(id) === listing.id)
    setListing(listing)
  }, [])
  return (
    <div className="listing">
      <img src={listing.img} alt="" />
      <h1>{listing.name}</h1>
      <p>{listing.location}</p>
    </div>
  )
}

export default Listing
