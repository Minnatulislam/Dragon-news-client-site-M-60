import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BrandNews from '../../../assets/Brand/th.jpg'
import BrandNews1 from '../../../assets/Brand/th1.jpg'
import BrandNews2 from '../../../assets/Brand/th2.jpg'

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrandNews}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrandNews1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BrandNews2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;