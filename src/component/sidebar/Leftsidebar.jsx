import React from 'react'
import './leftsidebar.css'
import globe from '../../assesst/globe.png'
import { NavLink } from 'react-router-dom'

export default function Leftsidebar() {
  return (
    <div className='left-sidebar'>
    <nav className='side-nav'>
    <NavLink to='/' className='side-nav-links' activeClass='active'>
    <div>
    <p>Home</p>
    </div>
    </NavLink>
    <div className='side-nav-div'>
    <div><p>PUBLIC</p></div>
    <NavLink to='/Question' className='side-nav-links' activeclass='active'>
    <img src={globe} alt='globe'/>
    <p style={{padding:'10px'}}>Questions</p>

    </NavLink>
    <NavLink to='/Tags' className='side-nav-links' activeclass='active'>
    <p>Tags</p>

    </NavLink>
    <NavLink to='/Tags' className='side-nav-links' activeclass='active'>
    <p>Users</p>

    </NavLink>
    </div>
   
    </nav>
      
    </div>
  )
}
