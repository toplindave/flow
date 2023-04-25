import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'
// import logo from '../public/asset/logo.svg'
import {ReactComponent as SvgIcon} from './logo.svg'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link className='logo' to='./'>
            <div className='logo-pic'>
                <SvgIcon/>
            </div>
            <div className='logo-text'>
                greenietec software
            </div>
        </Link>
        <div className='navbar'>
            <ul>
                <li><NavLink to='./Services'>Services</NavLink></li>
                <li><NavLink to='./Projects'>Projects</NavLink></li>
                <li><NavLink to='./About'>About us</NavLink></li>
                <li><NavLink to='./Contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar