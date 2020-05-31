import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import Navbar from 'components/Navbar';
import ListIndex from 'components/ListIndex';
const ChallengePage = () => {
    const [isMyChallenge, setIsMyChallenge] = useState(false);
    function handleSetChallengeType(selected) {
        setIsMyChallenge(selected);
    }
    const { search } = useLocation();

    useEffect(() => {
        if(search  === '?q=%27mychallenge%27') {
            setIsMyChallenge(true);
        }
    }, [search])

    return(
        <>
            <Navbar />  

            <div className="btnGroup" >
                <button 
                    type="button" className={!isMyChallenge ? 'selected' : ''}
                    onClick={() => handleSetChallengeType(false)}
                >
                    Challenges
                </button>
                <button 
                    type="button" className={isMyChallenge ? 'selected' : ''}
                    onClick={() => handleSetChallengeType(true)}
                >
                    My Challenges
                </button>
            </div>
            <ListIndex />
        </>
    );
}

export default ChallengePage;
