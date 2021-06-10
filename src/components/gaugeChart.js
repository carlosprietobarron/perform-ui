import React, {useState} from "react";
import Chart from "react-google-charts";
import {JustADate} from './utility'

const gauge = (data) => {
  const [goal, setGoal] = useState(0);
  const convertDate =(meas)=>{
    let arr = meas.split("-");
    let ret = [];
    arr.forEach(item => {
      ret.push(parseInt(item, 10));
    });
    return new Date(ret);
  };

  function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

  function badEmptyCheck(value) {
    return Object.keys(value).length === 0;
  }
  
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

    chartData=[['Day', 'Ocurrencies']]
    console.log("day1", day1);
    console.log("date3", date3.toDateString());
    console.log("day2", day2);
    console.log("date2", format(date2));
    console.log("day3", day3);
    console.log("date1", date1);
    if (!badEmptyCheck(day1)) 
       {chartData.push([day1.day, day1.measure]);}
    else 
       {chartData.push([format(date3), 0]);}
    
    if (!badEmptyCheck(day2)) 
       {chartData.push([day2.day, day2.measure]);}
    else 
       {chartData.push([format(date2), 0]);}
    
    if (!badEmptyCheck(day3)) 
       {chartData.push([day3.day, day3.measure])}
    else 
       {chartData.push([format(date3), 0]);}

    //  chartData=[
    //      ['Day', 'Ocurrencies'],
    //      [day1.day, day1.measure],
    //      [day2.day, day2.measure],
    //      [day3.day, day3.measure],
    //    ];

  } else {
    chartData= [
         ['Day', 'Ocurrencies'],
         [date1, 1],
         [date2, 1],
         [date3, 1],
    ];
  }
 
  if (data.measures.length < 0) {
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
          redFrom: 0,
          redTo: 5,
          yellowFrom: 6,
          yellowTo: data.goal,
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
