import React from 'react';
import './CardRow.css';
import { Card } from '../AlumniCard/Card';

export const CardRow = ({ cards }) => {
    return (
        <div className="cardrows1">
            {cards.map((card, index) => (
                <div key={index} className={`card${index + 1}`}>
                    <Card
                        image={card.image} 
                        name={card.name} 
                        description={card.description} 
                        linkedinUrl={card.linkedinUrl}
                    />
                </div>
            ))}
        </div>
    );
};
