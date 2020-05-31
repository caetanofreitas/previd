import React from 'react'
import './style.css'

import { MdAttachMoney } from 'react-icons/md'

import roupa from 'assets/images/roupa.png'

const AwardCard = () => {
  return(
    <div className='awardcard'>

      <div className='img-container'>
        <img src={roupa} />
      </div>

      <button>
        <MdAttachMoney/> 500
      </button>

    </div>
  )
}

export default AwardCard