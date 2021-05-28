import React, {useState, useEffect, useLayoutEffect} from "react";
import Chart from "react-google-charts";
import {JustADate} from './utility'

const gauge = (data) => {
  const [key, setkey] = useState();
  const [state, setState] = useState({
    status: "loading",
    chartdata: [],
  });

  const [minDate, setMinDate] = useState(
    new Date(2021, 1, 4)
    )
  
  const [maxDate, setMaxDate] = useState(
      new Date(2021, 1, 6)
    )

  const convertDate =(meas)=>{
    let arr = meas.split("-");
    let ret = [];
    arr.forEach(item => {
      ret.push(parseInt(item));
    });
    return new Date(ret);
  };

  const size = useWindowSize();
  
  let chartData = [];
  let date1= new Date();
  date1.setDate(date1.getDate()-1)
  let date2= new Date();
  date2.setDate(date2.getDate()-2)
  let date3= new Date();
  date3.setDate(date3.getDate()-3)

  if (data.measures.length > 0) {
    const day3 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() == JustADate(date1).toString())} 
    const day2 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() == JustADate(date2).toString())}
    const day1 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() == JustADate(date3).toString())}
    console.log("busca fecha",day3, day2, day1);
    
    console.log("day1", day1["day"]);

     chartData=[
         ['Day', 'Ocurrencies'],
         [day1.day, day1.measure],
         [day2.day, day2.measure],
         [day3.day, day3.measure],
       ];
       console.log((chartData));
  } else {
    chartData= {};
  }

  useEffect(() => {
    setkey(prevKey => !prevKey);
    //console.log("size", size);
  }, [size.width]);

  function useWindowSize(defaultValue) {
    const [windowSize, setWindowSize] = useState({
        innerWidth: defaultValue
    });

    useLayoutEffect(() => {
        setWindowSize({ innerWidth: window.innerWidth });
        // console.log("use layout innerw",innerWidth);
        // console.log("size", size);
    }, []);

    return windowSize;
}


  const windowSize = useWindowSize("70%");
  
  if (data.measures.length < 1) {
    return (
      <div>
        <h3>There is no Data</h3>
      </div>
    )
  } else {
    console.log("chart data in gauge",chartData);
    return (
        <Chart
        width={400}
        height={120}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
};

function GaugeChart({rawData, idx}) {

 // console.log("raw data", rawData[idx]);
   
 return (
    <div className="chart_data_display">
      {gauge(rawData[idx])}
    </div>
  );
}

export default GaugeChart;

{/* <Chart
        key={key}
        width={"800px"}
        height={"100%"}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Indicator's Measurements",
          explorer: {axis: 'horizontal'},
        }}
        rootProps={{ "data-testid": "1" }}
      /> */}
