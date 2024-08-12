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
                    <h1 className="card-title">
                        <a href="https://www.linkedin.com/in/sidbalaga/" target="_blank" rel="noreferrer">
                            Nicholas Stone
                        </a>
                    </h1>
                    <p className="card-description">Georgia Institute of Technology</p>
                </div>
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    );
};
