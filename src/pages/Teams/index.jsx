import React from 'react'
import './styles.css'

import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

import Navbar from 'components/Navbar'
import TeamCard from 'components/TeamCard'

const Teams = () => {
  return(
    <>
      <Navbar/>

      <div className="teams-container">
        <Link to='/'>
          <MdArrowBack color='#759DAA' size={40}/>
        </Link>
        <div className="card-container">
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
        </div>
      </div>
    </>
  )
}

export default Teams