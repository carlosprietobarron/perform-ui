import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function carouselItem(props) {
    const {indicator} = props
    return (
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          alt = "indicator"
          src = {`holder.js/800x400?text=${indicator.name}s&bg=373940`}
        />
        <Carousel.Caption>
          <h3>{indicator.name}</h3>
            <p>{`Number of ${indicator.name}.`}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
}

export default carouselItem
