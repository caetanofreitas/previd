import React from 'react';
import { 
    MdEdit,
    MdAddAPhoto,
    MdAttachment,
    MdFormatSize,
    MdInsertPhoto,
    MdInsertLink,
    MdPublish,
} from 'react-icons/md';
import Navbar from 'components/Navbar';
import './styles.css';
import image from 'assets/images/image.png';
import Arthur from 'assets/images/arthur.png';
import Jacob from 'assets/images/jacob.png';

const Submit = () => {
    return(
        <>
        <Navbar />

        <section className="SubmitContainer">
            <div className="imageContainer">
                <MdAddAPhoto size={50} className="addPhotoIcon" />
                <img src={image} alt="Exemple" />  
            </div>

            <div className="infos">
                <h1>Fusion <MdEdit size={40} /> </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

                <h1>
                    Members
                </h1>

                <ul>
                    <li>
                        <img src={Arthur} alt="arthur" />
                        <p>Arthur</p>
                    </li>

                    <li>
                        <img src={Jacob} alt="Jacob" />
                        <p>Jacob</p>
                    </li>
                </ul>
            </div>
        </section>

        <h1 className="actionTitle">
            Send the created solutions for an evaluation
        </h1>

        <div className="textEditor">
            <header>
                <div>
                    <MdAttachment size={45} />
                    <MdFormatSize size={45} />
                    <MdInsertPhoto size={45} />
                    <MdInsertLink size={45} />
                    <MdPublish size={45} />
                </div>
            </header>
            <textarea placeholder="Send your solution as a link, slide, Doc, IMG ..."></textarea>
            <footer>
                <button>
                    Submit
                </button>
            </footer>
        </div>
        </>
    );
}

export default Submit;
