import React from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import './style.css';
import Grupo from 'assets/images/Grupo.svg';

const ModalRegister = ({ setOpenRegister }) => {
   return(
    <div className="ModalBack" >
        <div className="modalBox" >
            <img src={Grupo} alt="group" />
            
            <div className="form">
                <div>
                    <MdPerson size={40} />
                    <input type="text" placeholder="Name" />
                </div>
                
                <div>
                    <MdEmail size={40} />
                    <input type="text" placeholder="E-mail" />
                </div>

                <div>
                    <MdLock size={40} />
                    <input type="password" placeholder="Password" />
                </div>
                
                <button type="button">
                    Register
                </button>
            </div>


            <div className="closeModal" onClick={() => setOpenRegister(false) }>
                X
            </div>
        </div>
    </div>
   );
}

export default ModalRegister;
