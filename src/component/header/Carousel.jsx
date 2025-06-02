// CarouselComponent.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel from "../../asstes/images/iplslider1.jpg";
import carousel1 from "../../asstes/images/iplslider2.jpg";
import carousel2 from "../../asstes/images/iplslider4.jpg";


const CarouselComponent = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel}
          alt="First slide"
          width="40" height="500"
        />
        <Carousel.Caption>
          <h3>MI VS RC</h3>
          <p>The Mumbai Indians (MI) and Rajasthan Royals (RR) are two iconic franchises in the Indian Premier League. MI, based in Mumbai, is one of the most successful teams with five IPL titles, while RR, based in Jaipur, won</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="Second slide"
          width="40" height="500"
        />
        <Carousel.Caption>
          <h3>KRR VS CSK</h3>
          <p>Kolkata Knight Riders (KKR) and Chennai Super Kings (CSK) are two of the most popular and successful teams in the Indian Premier League. CSK, led for years by the legendary MS Dhoni, is known for its</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Third slide"
          width="40" height="500"
        />
        <Carousel.Caption>
          <h3>IPL T20</h3>
          <p>The Indian Premier League (IPL) is home to 10 dynamic teams, each with its unique identity, fan base, and playing style. Chennai Super Kings (CSK), led by the iconic MS Dhoni, are known for their consistency,</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
