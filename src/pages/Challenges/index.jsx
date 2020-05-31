import React, { useState } from 'react';
import './styles.css';
import Navbar from 'components/Navbar';
const ChallengePage = () => {
    const [isMyChallenge, setIsMyChallenge] = useState(false);
    return(
        <>
            <Navbar />  

            <div className="btnGroup" >
                <button type="button" className={!isMyChallenge ? 'selected' : ''}>
                    Challenges
                </button>
                <button type="button" className={isMyChallenge ? 'selected' : ''}>
                    My Challenges
                </button>
            </div>  
        </>
    );
}

export default ChallengePage;
