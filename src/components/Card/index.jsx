import React from 'react';

import './style.css'

const Card = () => {
    return(
        <div className="cardBox">
            <h1>
                The Food System Vision
            </h1>

            <p>
                The Rockefeller Foundation has partnered with SecondMuse and OpenIDEO to amplify the discourse on the state and the future of the world’s many food systems.
            </p>

            <button type="button">
                Get involved
            </button>
        </div>
    );
}

export default Card;
