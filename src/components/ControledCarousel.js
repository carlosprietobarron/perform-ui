import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel({indicators}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    useEffect(() => {
      console.log(indicators);
    }, []);

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-half"
            src="https://i.ibb.co/FBK5y8w/coldcall.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="Dark-Text">First slide label</h3>
            <p className="Dark-Text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-half"
            src="https://i.ibb.co/FBK5y8w/coldcall.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="Dark-Text">Second slide label</h3>
            <p className="Dark-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-half"
            src="https://i.ibb.co/FBK5y8w/coldcall.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="Dark-Text">Third slide label</h3>
            <p className="Dark-Text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel;