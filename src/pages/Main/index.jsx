import React from 'react';

import NavBar from 'components/Navbar';
import ListIndex from 'components/ListIndex';
import PartnerForm from 'components/PartnerForm';
import Group from 'assets/images/Grupo.svg'
import './styles.css';
import Partner1 from 'assets/images/Partner1.svg';
import Partner2 from 'assets/images/Partner2.svg';
import Partner3 from 'assets/images/Partner3.svg';
import Partner4 from 'assets/images/Partner4.svg';

const Main = () => {
    const partners = [Partner1, Partner2, Partner3, Partner4];
    return(
        <>
            <header>
                <NavBar />

                <section>
                    <div className="content">
                        <h1>
                            Make friends and create innovative solutions.
                        </h1>

                        <p>
                            Previd's community creates challenges that bring people together to solve problems using innovation.
                        </p>
                    </div>

                    <img src={Group} className="imageBox" />
                </section>
            </header>

            <ListIndex />
            <PartnerForm />

            <section className="partners">
                <h1>
                    Partnerships
                </h1>

                <div className="partnersTable">
                    {
                        partners.map((e, index) => (
                            <img src={e} alt={index}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Main;
