import React from 'react'
import {Link} from 'react-router-dom' 
import logo from '../../assesst/logo.jpg'
import search from '../../assesst/search.jpg'
//import Button from '../Button/button'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
const style={
    width:"200px"
}

export default function Navbar() {
  var User=null;
  return (
    <nav className='main-nav'>
    <div className='Navbar'>
    <Link to='/'>

    <img src={logo} alt='logo' style={style} className='nav-item nav-logo'/>
    </Link>
    <Link className='nav-item nav-btn' to='About'>About</Link>
    <Link className='nav-item nav-btn' to='/'>products</Link>
    <Link className='nav-item nav-btn' to='/'>for Teams</Link>
    <form>
    <input type='text' placeholder='search...'/>
    
    
    <img src={search} alt='search' width='18' className='icon'/>
    {
      User==null?
      <Link to='./Auth' className='nav-links'>login</Link>:
      <>
      <Link to='/User'><Avatar children= "  A  "/></Link>
      <button>Logout</button>
      </>
    }
    </form>
    </div>
   
    </nav>
  )
}
