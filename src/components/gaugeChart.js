import React from "react";
import Chart from "react-google-charts";
import {JustADate} from './utility'

const gauge = (data) => {

  const convertDate =(meas)=>{
    let arr = meas.split("-");
    let ret = [];
    arr.forEach(item => {
      ret.push(parseInt(item, 10));
    });
    return new Date(ret);
  };
  
  let chartData = [];
  let date1= new Date();
  date1.setDate(date1.getDate()-1)
  let date2= new Date();
  date2.setDate(date2.getDate()-2)
  let date3= new Date();
  date3.setDate(date3.getDate()-3)

  if (data.measures.length > 0) {
    const day3 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() === JustADate(date1).toString())} 
    const day2 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() === JustADate(date2).toString())}
    const day1 = {...data.measures.find(m => JustADate(convertDate(m.day)).toString() === JustADate(date3).toString())}

     chartData=[
         ['Day', 'Ocurrencies'],
         [day1.day, day1.measure],
         [day2.day, day2.measure],
         [day3.day, day3.measure],
       ];

  } else {
    chartData= {};
  }
 
  if (data.measures.length < 1) {
    return (
      <div>
        <h3>There is no Data</h3>
      </div>
    )
  } else {
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
  
 return (
    <div className="chart_data_display">
      {gauge(rawData[idx])}
    </div>
  );
}

export default GaugeChart;
