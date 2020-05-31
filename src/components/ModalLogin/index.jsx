import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import './style.css';
import Grupo from 'assets/images/Grupo.svg';

const ModalLogin = ({ setOpenLogin, setOpenRegister }) => {
   return(
    <div className="ModalBack" >
        <div className="modalBox" >
            <img src={Grupo} alt="group" />
            
            <div className="form">
                <div>
                    <MdEmail size={40} />
                    <input type="text" placeholder="E-mail" />
                </div>

                <div>
                    <MdLock size={40} />
                    <input type="password" placeholder="Password" />
                </div>
                
                <button type="button">
                    LogIn
                </button>

                <p>
                    Not logged in? 
                    <span
                        onClick={() => {
                            setOpenLogin(false);
                            setOpenRegister(true)
                        }}
                    >
                        Register
                    </span>
                </p>
            </div>


            <div className="closeModal" onClick={() => setOpenLogin(false) }>
                X
            </div>
        </div>
    </div>
   );
}

export default ModalLogin;
