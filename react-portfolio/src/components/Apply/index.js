import React, { useEffect, useState } from 'react';
import centerPic from '../../assets/images/Fear.png';
import gearPic from '../../assets/images/Gear.png'; // Already imported second image
import shearPic from '../../assets/images/Shear.png'; // Import the third image
import './index.scss';
import Loader from 'react-loaders';

const Program = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="line-scale-pulse-out" />
      ) : (
        <div className="pics-container">
          <img src={centerPic} alt="Center" className="pic center-pic" />
          <img src={gearPic} alt="Gear" className="pic gear-pic" />
          <img src={shearPic} alt="Shear" className="pic shear-pic" /> {/* Add the third image */}
        </div>
      )}
    </>
  );
};

export default Program;
