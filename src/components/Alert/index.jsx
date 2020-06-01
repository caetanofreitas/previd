import React from 'react';

import './styles.css';
import done from 'assets/images/done.svg';

const Alert = () => {
    return(
        <div className="alert">
            <img src={done} alt="Done!" />
            <h1>Go to the team!</h1>
        </div>
    );
}

export default Alert;
