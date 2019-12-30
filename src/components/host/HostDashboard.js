import React, { useContext } from 'react'
import { LISTINGS } from '../../utils/data'
import AuthContext from '../../contexts/AuthContext'

const HostDashboard = () => {
  const { authUser } = useContext(AuthContext)
  const my_listings = LISTINGS.filter(
    listing => listing.host_id === authUser.id
  )

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {my_listings.map(listing => (
          <li>{listing.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HostDashboard
