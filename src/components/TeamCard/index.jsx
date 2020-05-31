import React from 'react'
import './styles.css'

const TeamCard = () => {

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  return(
    <div style={{backgroundColor:getRandomColor()}} className="teamcard">
      <div>
        <label>Team name</label> <button>Join</button>
      </div>
    </div>
  )
}

export default TeamCard