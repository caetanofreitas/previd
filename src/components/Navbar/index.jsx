import React, { useState, useEffect } from 'react';
import { MdSearch, MdPerson, MdArrowDropDown } from 'react-icons/md';
import './style.css';
import logo from 'assets/images/logo.svg';
import { useHistory } from 'react-router-dom';
import Dropdown from '../Dropdown'

const NavBar = () => {
    const history = useHistory();
    const [isChallenge, setIsChallenge] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        setIsChallenge(window.location.pathname === '/challenges' ? true : false);
    }, []);

    function openDropdown(){
      setDropdown(!dropdown)
    }

    return(
        <div className="header-navbar">
            <img src={logo} alt="Provid" className="logo" onClick={() => history.push('/')} />
            
            <div className="inputBox">
                <MdSearch size={36} className="search" />
                <input type="text" placeholder="Search" />
            </div> 

            <nav>
                <ul>
                    <li>
                        {
                            isChallenge ?
                            'To Submit' :
                            'Be a partner'
                        }
                    </li>
                    <li onClick={() => history.push('/challenges') } >
                        Challenges
                    </li>
                    <li onClick={openDropdown}>
                        <MdPerson size={30} />
                        Rafa
                        <MdArrowDropDown size={30} />
                        {dropdown && <Dropdown/>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
