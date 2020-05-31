import React from 'react';
import { MdSearch, MdPerson, MdArrowDropDown } from 'react-icons/md';
import './style.css';
import logo from 'assets/images/logo.svg';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    return(
        <div className="header-navbar">
            <img src={logo} alt="Provid" className="logo" onClick={() => history.push('/')} />
            
            <div className="inputBox">
                <MdSearch size={36} className="search" />
                <input type="text" placeholder="Search" />
            </div> 

            <nav>
                <ul>
                    <li>Be a partner</li>
                    <li>Challenges</li>
                    <li>
                        <MdPerson size={30} />
                        Rafa
                        <MdArrowDropDown size={30} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
