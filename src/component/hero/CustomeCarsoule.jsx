import "./CustomeCarsoule.css";
import React, { useState, useEffect } from 'react';

import img1 from "../../asstes/images/ipl-background.jpg";
import img2 from "../../asstes/images/ipl-background1.jpg";
import img3 from "../../asstes/images/ipl-backgrund2.jpg";
import img4 from "../../asstes/images/ipl-backgrund2.jpg";

import imgc1 from "../../asstes/images/ipl-centerbackground.jpg";
import imgc2 from "../../asstes/images/ipl-centerbackground2.jpg";
import imgc3 from "../../asstes/images/ipl-centerbsckbackground2.jpg";

const Imagesc = [imgc1,imgc2,imgc3];

const Images = [img1, img2, img3, img4];

const CustomeCarsoule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="customc-container"> 
      <h2 className="customc-heading">2025</h2>

      <div className="customc-body">
        {/* left */}
        <div className="customc-leftbox">
          <img
            src={Images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            id="imgSlid"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          
        </div>

        {/* center */}
        <div className="customc-centerbox">
          <h1 className="customc-heading">1294</h1>
          <p className="customc-para">Four</p>
        </div>

        {/* right */}
        <div className="customc-leftbox">
          <img
            src={Images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            id="imgSlid"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomeCarsoule;