import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import './style.css'

const Dropdown = () => {
  const history = useHistory()
  return(
    <nav className='dropdown'>
      <p onClick={() => history.push('/challenges?q=%27mychallenge%27')}>My Challenges</p>
      <p onClick={()=>history.push('/awards')}><MdAttachMoney/> Points </p>
      <p>Chat</p>
    </nav>
  )
}

export default Dropdown
