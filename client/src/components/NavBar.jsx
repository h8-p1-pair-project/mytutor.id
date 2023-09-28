import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/access-auth">Sign in</NavLink>
    </nav>
  )
}

export default NavBar