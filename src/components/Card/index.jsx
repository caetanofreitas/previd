import React from 'react';
import { useHistory } from 'react-router-dom'

import './style.css'

const Card = () => {
  const history = useHistory()
    return(
        <div className="cardBox">
            <h1>
                The Food System Vision
            </h1>

            <p>
                The Rockefeller Foundation has partnered with SecondMuse and OpenIDEO to amplify the discourse on the state and the future of the world’s many food systems.
            </p>

            <button type="button" onClick={()=>history.push('/challenges/1')}>
                Get involved
            </button>
        </div>
    );
}

export default Card;
