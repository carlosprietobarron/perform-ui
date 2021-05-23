import React, {useState, useEffect, useLayoutEffect} from "react";
import Chart from "react-google-charts";

const calendar = (data) => {
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
  
  let chartData = [['Indicator', 'Ocurrencies']];
  if (data.measures.length > 0) {
    
    for (let i = 0; i < data.measures.length; i += 1) {
      console.log(convertDate(data.measures[i].day));
      chartData.push([convertDate(data.measures[i].day), data.measures[i].measure])
    }
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
    
    return (
      <Chart
        key={key}
        width={windowSize}
        height={"100%"}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Indicator's Measurements",
          explorer: {axis: 'horizontal'},
        }}
        rootProps={{ "data-testid": "1" }}
      />
    );
  }
};

function CalendarChart({rawData, idx}) {

  console.log("raw data", rawData[idx]);
   
 return (
    <div className="chart_data_display">
      {calendar(rawData[idx])}
    </div>
  );
}

export default CalendarChart;
