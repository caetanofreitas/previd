import React from 'react';
import { MdArrowDropDown } from 'react-icons/md'
import Card from 'components/Card';
import './style.css';

const ListIndex = () => {
    return(
        <section className="listContainer">
            <div className="listBox">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className="viewMore">
                <h2>
                    View more <MdArrowDropDown size={40} />
                </h2>
            </div>
        </section>
    );
};

export default ListIndex;
