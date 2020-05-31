import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './styles.css'

const PartnerForm = () => {
    return(
        <div className="FormContainer" id="beapartner">
            <h1>Become a partner company!</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="E-mail" />
                <button type="button" className="arrowButton">
                    <MdKeyboardArrowRight size={35} />
                </button>
            </form>

            <div className="decoration1"></div>
            <div className="decoration2"></div>
        </div>
    );
}

export default PartnerForm;
