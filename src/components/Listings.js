import React, { useState, useEffect, Fragment } from 'react'
import { LISTINGS } from '../utils/data'
import queryString from 'query-string'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Listings = ({ location }) => {
  const [listings, setListings] = useState([])
  const { search } = location
  const queries = queryString.parse(search)
  const { location: listingLocation, types, check_in, check_out } = queries

  useEffect(() => {
    setListings(LISTINGS)
    console.log(queries)
  }, [search])

  return (
    <div>
      <h1 style={{ marginLeft: '30px' }}>
        {/* Capitalize */}
        {listingLocation &&
          listingLocation.charAt(0).toUpperCase() + listingLocation.slice(1)}
      </h1>
      <ul className="listings">
        {listings
          .filter(l =>
            listingLocation
              ? l.location.toUpperCase() === listingLocation.toUpperCase()
              : true
          )
          .map(listing => (
            <Link
              key={listing.id}
              to={
                check_in && check_out
                  ? `${location.pathname}/${listing.id}?check_in=${check_in}&check_out=${check_out}`
                  : `${location.pathname}/${listing.id}`
              }
            >
              <li className="listing">
                <div className="listing-img">
                  <img src={listing.img} alt="Listing images" />
                </div>
                <div className="description">
                  <p className="listing-rating">
                    <FaStar
                      color="#ff385c"
                      size="12"
                      style={{
                        position: 'relative',
                        bottom: '3px',
                        marginRight: '5px'
                      }}
                    />
                    <span>{listing.rating}</span>
                  </p>
                  <h3 className="listing-title">{listing.name}</h3>
                  <p className="listing-types">{listing.types}</p>
                  <div className="listing-price">
                    <p>฿ {listing.price} / night</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}

export default Listings
