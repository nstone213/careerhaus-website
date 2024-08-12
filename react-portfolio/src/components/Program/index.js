import React from 'react';
import './index.scss';
import { Card } from '../AlumniCard/Card';
import Loader from 'react-loaders'
import Nicholas_Stone from '../Program/AlumniPhotos/Nicholas_Stone_image.jpeg';

const Program = () => {
  return (
   <>
     <div className="program-page">
        <h1 className="program-alumni-header">program alumni</h1>
        <h2 className="cohort-1-header">cohort 1</h2>
        <Card 
          image={Nicholas_Stone} 
          name="Nicholas Stone" 
          description="Georgia Institute of Technology" 
          linkedinUrl="https://www.linkedin.com/in/nicholasbaronstone/" 
        />
      </div>
      <Loader type="line-scale-pulse-out"/>
    </>
  );
};

export default Program;