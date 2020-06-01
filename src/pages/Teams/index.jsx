import React, { useState, useEffect } from 'react'
import './styles.css'

import Alert from 'components/Alert';
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

import Navbar from 'components/Navbar'
import TeamCard from 'components/TeamCard'

const Teams = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2500)
    }
  }, [alert])
  return(
    <>
      <Navbar/>

      <div className="teams-container">
        <Link to='/'>
          <MdArrowBack color='#759DAA' size={40}/>
        </Link>
        <div className="card-container">
          <TeamCard setAlert={setAlert} />
          <TeamCard setAlert={setAlert} />
          <TeamCard setAlert={setAlert} />
          <TeamCard setAlert={setAlert} />
          <TeamCard setAlert={setAlert} />
        </div>
      </div>

      {
        alert && <Alert />
      }
    </>
  )
}

export default Teams
