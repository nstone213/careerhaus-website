import React from 'react';
import './CardRow.css';
import { Card } from '../AlumniCard/Card';
import Nicholas_Stone from '../AlumniCard/AlumniPhotos/Nicholas_Stone_image.jpeg';
import Aabha_Muley from '../AlumniCard/AlumniPhotos/AabhaMuley.png';
import Ravnoor_Gujral from '../AlumniCard/AlumniPhotos/RavnoorGujral.png';
import Lakshana_Ramanan from '../AlumniCard/AlumniPhotos/LakshanaRamanan.png';
import Rohan_Srivatsa from '../AlumniCard/AlumniPhotos/RohanSrivatsa.png';

export const CardRow = () => {
    return (
            <div className="cardrows1">
                <div className="card11">
                    <Card
                        image={Aabha_Muley} 
                        name="Aabha Muley" 
                        description="University of Georgia" 
                        linkedinUrl="https://www.linkedin.com/in/aabha-muley/"
                    />
                </div>

                <div className="card12">
                    <Card
                        image={Ravnoor_Gujral} 
                        name="Ravnoor Gujral" 
                        description="Georgia Institute of Technology" 
                        linkedinUrl="https://www.linkedin.com/in/ravnoorgujral/" 
                    />
                </div>

                <div className="card13">
                    <Card
                        image={Lakshana_Ramanan} 
                        name="Lakshana Ramanan" 
                        description="Georgia Institute of Technology" 
                        linkedinUrl="https://www.linkedin.com/in/lakshana-ramanan/" 
                    />
                </div>

                <div className="card14">
                    <Card
                        image={Rohan_Srivatsa} 
                        name="Rohan Srivatsa" 
                        description="University of Georgia" 
                        linkedinUrl="https://www.linkedin.com/in/rohansrivatsa/" 
                    />
                </div>
            </div>
    );
};