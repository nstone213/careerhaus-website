import React from 'react';
import './index.scss';
import { Card } from '../AlumniCard/Card';
import Loader from 'react-loaders'
import { CardRow } from '../AlumniCard/CardRow';
import Nicholas_Stone from '../AlumniCard/AlumniPhotos/Nicholas_Stone_image.jpeg';
import Aabha_Muley from '../AlumniCard/AlumniPhotos/AabhaMuley.png';
import Ravnoor_Gujral from '../AlumniCard/AlumniPhotos/RavnoorGujral.png';


const Program = () => {
  return (
   <>
     <div className="program-page">
        <h1 className="program-alumni-header">program alumni</h1>
        <h2 className="cohort-1-header">cohort 1</h2>
        <CardRow/>
      </div>
      <Loader type="line-scale-pulse-out"/>
    </>
  );
};

export default Program;