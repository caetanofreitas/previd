import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import './style.css'

const Dropdown = () => {
  return(
    <nav className='dropdown'>
      <p>My Challenges</p>
      <p><MdAttachMoney/> Points </p>
      <p>Chat</p>
    </nav>
  )
}

export default Dropdown