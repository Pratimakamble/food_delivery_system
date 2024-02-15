import React from 'react'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import './Navbar.css'
import logo from '../asset/logo7.jpeg'

const Navbar = () => {
  return (
    <div>
        <nav>
          <img className='bg' src={logo} alt="" />
          <ul>
            <li className='img'><IoMdHelpCircleOutline/> Help </li>
            <li><FaUser/> Pratima Kamble</li>
          </ul>
        </nav>
    </div>
  )
}
