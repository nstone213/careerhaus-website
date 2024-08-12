import React from 'react';
import './Card.css';
import Loader from 'react-loaders'

export const Card = ({ image, name, description, linkedinUrl }) => {
    return (
        <>
            <div className="card-total">
                <div className="card-container">
                    <img src={image} alt={`${name} Image`} className="card-image" draggable="false"/>
                    <h1 className="card-title">
                        <a href={linkedinUrl} target="_blank" rel="noreferrer">
                            {name}
                        </a>
                    </h1>
                    <p className="card-description">{description}</p>
                </div>
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    );
};
