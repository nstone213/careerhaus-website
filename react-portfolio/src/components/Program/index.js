// ThreePics.js
import React from 'react';
import centerPic from '../../assets/images/Reer.png';
import './index.scss';

const Program = () => {
  return (
    <div className="pics-container">
      <img src={centerPic} alt="Center" className="pic" />
    </div>
  );
};

export default Program;
