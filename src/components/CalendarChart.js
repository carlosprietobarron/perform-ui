import React, { useState, useEffect, useLayoutEffect } from "react";
import Chart from "react-google-charts";

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

  const size = useWindowSize();

  let chartData = [['Indicator', 'Ocurrencies']];
  
  if (data.measures.length > 0) {

    for (let i = 0; i < data.measures.length; i += 1) {
      //console.log(convertDate(data.measures[i].day));
      chartData.push([convertDate(data.measures[i].day), data.measures[i].measure])
    }
  } else {
    chartData = {};
  }

  const [chartSize, setChartSize] = useState("1200px");
  const [sqrSize, setSqrSize] = useState(12);

  useEffect(() => {
    setkey(prevKey => !prevKey);
    console.log("size", size);

    if (size.width > 1000) {
      console.log("bp1", size.width);
      setSqrSize(15);
      setChartSize("1200px");
    } else {
      if (860 < size.width <= 1000) {
        console.log("bp2", size.width);
        setSqrSize(11);
        setChartSize("1000px");
      } else {
        if (760 < size.width <= 860) {
          console.log("bp3", size.width);
          setSqrSize(9);
          setChartSize("700px");
        } else {
          if (size.width <= 760) {
            console.log("bp4", size.width);
            setSqrSize(8);
            setChartSize("400px");
          };
        }
      }
    }

    console.log("sqr and chart size", sqrSize, chartSize);

  }, [size.width]);


  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    console.log("windowsSize", windowSize);
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


  // function useWindowSize(defaultValue) {
  //   const [windowSize, setWindowSize] = useState({
  //       innerWidth: defaultValue
  //   });

  //   console.log("windowssize", windowSize);
  //   console.log("innerwidth", window.innerWidth );

  //   useLayoutEffect(() => {
  //       setWindowSize({ innerWidth: window.innerWidth });
  //       console.log("use layout innerw",innerWidth);
  //       // console.log("size", size);
  //   }, [window.innerWidth]);

  //   return windowSize;
  // }
  //const windowSize = useWindowSize("90%");

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

  // console.log("raw data", rawData[idx]);

  return (
    <div className="chart_data_display">
      {calendar(rawData[idx])}
    </div>
  );
}

export default CalendarChart;
