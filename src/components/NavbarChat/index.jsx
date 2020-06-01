import React from 'react'
import './styles.css'

import { MdSearch,MdPerson,MdArrowDropDown } from 'react-icons/md'

import boy from 'assets/images/boy.png'

const NavbarChat = () => {
  return(
    <div className='chat-navbar'>
      
      <div className="inputBox">
        <MdSearch size={36}/>
        <input placeholder='Search'/>
      </div>
      
      <div className='user'>
        <MdPerson size={50} />
        Rafa
        <MdArrowDropDown size={30} />
      </div>
      <div className='user'>
        Challenges
      </div>
      <div className='user'>
        Home
      </div>
      <div className='user'>
        To Submit
      </div>

    </div>
  )
}

export default NavbarChat