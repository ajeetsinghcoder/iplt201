import React from "react";
// import pbksvmi from '../../asstes/images/';
import './Teamcard.css';


const shortsData = [
  { image: "pbkvsmi.jpg", title: "PBKsvMI"},
  { image: "gtvsmi.jpg", title: "GTvMI" },
  { image: "pbkvs rcb.jpg", title: "PBKsvRCB" },
  { image: "lsgvsrcb.jpg", title: "LSGvRCB" },
  { image: "pbkvsmi.jpg", title: "PBKsvMI" },
  { image: "pbkvs rcb.jpg", title: "SRHvKKR" },
//   { image: "pbkvsmi.jpg", title: "GTvCSK" },
//   { image: "pbkvs.jpg", title: "PBKsvDC" },
];

const ShortsCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Good Morning!</h2>
      <p className="carousel-paragraph">Curated shorts for you</p>

      <div className="carousel-scroll-wrapper">
        {shortsData.map((item, index) => (
          <div key={index} className="carousel-card">
            <div className="carousel-image-container">
              <img
                src={`/imagess/${item.image}`}
                alt={item.title}
                className="carousel-image"
              />
            </div>
            <p className="carousel-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShortsCarousel;
