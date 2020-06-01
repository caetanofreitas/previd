import React from 'react'
import './styles.css'

import { FaPaperPlane } from 'react-icons/fa'

const Message = () => {
  return(
    <div className='message-container'>
      <input placeholder='Type a message'/>
      <button> <FaPaperPlane/> </button>
      <button>To Submit</button>
    </div>
  )
}

export default Message