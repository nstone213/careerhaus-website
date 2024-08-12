import React from 'react';
import './index.scss';
import { Card } from '../AlumniCard/Card';
import Loader from 'react-loaders'
import Nicholas_Stone from '../Program/AlumniPhotos/Nicholas_Stone_image.jpeg';
import Aabha_Muley from '../Program/AlumniPhotos/AabhaMuley.png';
import Ravnoor_Gujral from '../Program/AlumniPhotos/RavnoorGujral.png'

const Program = () => {
  return (
   <>
     <div className="program-page">
        <h1 className="program-alumni-header">program alumni</h1>
        <h2 className="cohort-1-header">cohort 1</h2>
        <Card
          image={Aabha_Muley} 
          name="Aabha Muley" 
          description="University of Georgia" 
          linkedinUrl="https://www.linkedin.com/in/aabha-muley/" 
          className="card11"
        />
        <Card
          image={Ravnoor_Gujral} 
          name="Ravnoor Gujral" 
          description="Georgia Institute of Technology" 
          linkedinUrl="https://www.linkedin.com/in/ravnoorgujral/" 
          className="card12"
        />
      </div>
      <Loader type="line-scale-pulse-out"/>
    </>
  );
};

export default Program;