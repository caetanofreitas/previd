import React, { useState } from 'react'
import './styles.css'

import { MdArrowBack } from 'react-icons/md'
import { Link,useHistory } from 'react-router-dom'

import Navbar from 'components/Navbar'
import TeamForm from 'components/TeamForm'

import group from 'assets/images/Grupo.svg'

const Challenge = ({match}) => {
  const history = useHistory()
  const [display, setDisplay] = useState(false)
  console.log(match.params.id)
  return(
    <>
      <Navbar/>

      <div className='challenge-container'>
        <Link to='/'>
          <MdArrowBack color='#759DAA' size={40}/>
        </Link>

        <div className='challenge-description'>
          <img src={group} alt='group'/>
          <div className="main-container">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <div className="team-button-container">
              <button onClick={()=>setDisplay(!display)}>Create Team</button>
              <button onClick={()=>history.push('/submit')}>Join Team</button>
            </div>
          </div>
        </div>

        { display && <TeamForm/> }
      </div>
    </>
  )
}

export default Challenge
