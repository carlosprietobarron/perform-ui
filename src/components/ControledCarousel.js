/* eslint-disable max-len, react/prop-types, prefer-template */

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({ indicators, handleChange }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    handleChange(selectedIndex);
  };

  useEffect(() => {
    // console.log(indicators);
  }, []);

  function setCourousel(ind) {
    return (
      <Carousel.Item id={'ind-' + ind.name} onSelect={handleSelect}>
        <img
          className="d-block w-100 img-half"
          src="https://i.ibb.co/N9W4h0b/coldcallsmall.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="Dark-Text">{ind.name}</h3>
          <p className="Dark-Text">
            {ind.description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    );
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {indicators.map(setCourousel)}
    </Carousel>
  );
}

export default ControlledCarousel;

/* eslint-enable max-len, react/prop-types, prefer-template */
