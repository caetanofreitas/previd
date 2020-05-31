import React from 'react'
import './styles.css'

import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

import Navbar from 'components/Navbar'

const Teams = () => {
  return(
    <>
      <Navbar/>

      <div className="teams-container">
        <Link to='/'>
          <MdArrowBack color='#759DAA' size={40}/>
        </Link>
        <div className="card-container">
          
        </div>
      </div>
    </>
  )
}

export default Teams