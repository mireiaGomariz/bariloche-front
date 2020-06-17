import React, { useState } from 'react';
import '../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import Sunset from './img/gallery/sunset.png';
import Card1 from './img/home/card-blog1.png';
import Card2 from './img/home/card-blog2.png';
import { Context } from '../Context/Provider';


const BannerHome = () => {
    const { state } = React.useContext(Context);

  return(
        <div>
          <Carousel interval={3000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Sunset}
                alt="First slide"
                />
                <Carousel.Caption>
                <h4>First slide label</h4>
                <h1>Luxury <em>is</em> personal</h1>
                <a className="button carousel-slide-btn" href="#">Reservar</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Sunset}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h4>Second slide label</h4>
                <h1>Luxury <em>is</em> personal</h1>
                <a className="button carousel-slide-btn" href="#">Reservar</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Sunset}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h4>Third slide label</h4>
                <h1>Luxury <em>is</em> personal</h1>
                <a className="button carousel-slide-btn" href="#">Reservar</a>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome