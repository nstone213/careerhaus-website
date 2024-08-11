import React from 'react';
import './Card.css';
import Nicholas_Stone from './AlumniPhotos/Nicholas_Stone_image.jpeg';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'


export const Card = () => {
    return (
        <>
            <div className="card-total">
                <div className="card-container">
                    <img src={Nicholas_Stone} alt="Card Image" className="card-image" draggable="false"/>
                    <h1 className="card-title">Nicholas Stone</h1>
                    <p className="card-description">Georgia Institute of Technology</p>
                    <ul className="card-button">
                        <li>
                            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sidbalaga/'>
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    );
};
