import React, { useState, useEffect, useLayoutEffect } from "react";
import Chart from "react-google-charts";
import { JustADate } from "./utility";

const calendar = (data) => {
  const [key, setkey] = useState();

  const convertDate = (meas) => {
    let arr = meas.split("-");
    let ret = [];
    arr.forEach(item => {
      ret.push(parseInt(item, 10));
    });
    return new Date(ret);
  };

  const convertRawDAte = (rawDate) => {
    const rawdata=rawDate.split("/")
    const year=rawdata[2];
    const month=rawdata[0];
    const day=rawdata[1];
    return year + "-" + month + "-" + day
  }

  const size = useWindowSize();

  let chartData = [['Indicator', 'Ocurrencies']];
  
  if (data.measures.length > 0) {
    
    for (let i = 0; i < data.measures.length; i += 1) {
      chartData.push([convertDate(data.measures[i].day), data.measures[i].measure])
    }
  } else {
    const rawDate = JustADate(Date.now()).toLocaleDateString()
    
    const useDate = convertRawDAte(rawDate);
    
    chartData.push([convertDate(useDate), 0])
    
  }
  
  const [chartSize, setChartSize] = useState("1200px");
  const [sqrSize, setSqrSize] = useState(12);

  useEffect(() => {
    setkey(prevKey => !prevKey);

    if (size.width > 1000) {
      setSqrSize(15);
      setChartSize("1200px");
    } else {
      if (860 < size.width <= 1000) {
        setSqrSize(11);
        setChartSize("1000px");
      } else {
        if (760 < size.width <= 860) {
          setSqrSize(9);
          setChartSize("700px");
        } else {
          if (size.width <= 760) {
            setSqrSize(8);
            setChartSize("400px");
          };
        }
      }
    }

  }, [size.width]);


  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  //data.measures.length < 1

  if (false) {
    return (
      <div>
        <h3>There is no Data</h3>
      </div>
    )
  } else {

    return (
      <Chart
        key={key}
        width={chartSize}
        height={"100%"}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Indicator's Measurements",
          calendar: { cellSize: sqrSize },
          explorer: { axis: 'horizontal' },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    );
  }
};

function CalendarChart({ rawData, idx }) {

  return (
    <div className="chart_data_display">
      {calendar(rawData[idx])}
    </div>
  );
}

export default CalendarChart;
