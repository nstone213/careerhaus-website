import React from 'react';
import './Card.css';

export const Card = ({ image, name, description, linkedinUrl, className }) => {
    return (
        <>
            <div className='card-total'>
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
        </>
    );
};
