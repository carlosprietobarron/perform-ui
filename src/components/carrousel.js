import React , {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselItem from './carrouselItem'

function IndCarousel(props) {
  const {updateFilter, indicators} = props

  const [index, setIndex] = useState(0);
  
  const callCarouselItem = item => {
    <carouselItem indicator={item} />
  }
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    updateFilter(indicators[index].id)
  };
      
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {indicators.map(item=>callCarouselItem(item))}
    </Carousel>
    );
  }
      
export default IndCarousel
