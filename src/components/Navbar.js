import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/host">Host login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
