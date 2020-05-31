import React from 'react'
import './styles.css'

import Navbar from 'components/Navbar'
import AwardCard from 'components/AwardCard'

const Awards = () => {
  return(
    <>
      <Navbar/>

      <div className='awards-container'>
        <h1>Awards</h1>
        <div>
          <AwardCard/>
          <AwardCard/>
          <AwardCard/>
          <AwardCard/>
          <AwardCard/>
          <AwardCard/>
        </div>
      </div>
    </>
  )
}

export default Awards