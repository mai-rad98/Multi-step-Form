import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import './styles.css'


function Navbar() {
  return (
    
    <nav className="nav">
      <Link to="/home" className="site-title">
       TUTORIAL REGISTRATION
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
   
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar