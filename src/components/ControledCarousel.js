import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({ indicators }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    console.log(indicators);
  }, []);

  function setCourousel(ind) {
    console.log("carousel item", ind)
    return (
      <Carousel.Item>
        <img
          className="d-block w-100 img-half"
          src="https://i.ibb.co/FBK5y8w/coldcall.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="Dark-Text">{ind.name}</h3>
          <p className="Dark-Text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    );
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {indicators.map(setCourousel)}
    </Carousel>
  );
}

export default ControlledCarousel;
