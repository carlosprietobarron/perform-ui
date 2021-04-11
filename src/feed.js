const feed = ( () =>{
  const indicators = [];

  const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };
     
  const feedMeasures = () =>{
      day = "03-01-2021";
      measures = []
      for ( let j = 0; j <= 30; j ++) {
          let mea = {
              day = day + 1,
              value = getRandomInt(1,20)
          }
          measures.push(mea);
      }
      return measures;
  };
  
  const feedIndicator = () => {
      indicators = []
      for (let i = 0; i<= 4; i++){
          let ind = {
              name = `indix${i}`,
              goal = getRandomInt(5,20),
              measures = feedMeasures()
          }
          indicators.push(ind);
      }
      return indicators
  }
  
  return {feedIndicator}
})();

export default feed

