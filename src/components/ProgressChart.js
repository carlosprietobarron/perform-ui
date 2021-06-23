import React, { useState, useEffect, useLayoutEffect } from "react";
import Chart from "react-google-charts";
import { JustADate } from "./utility";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const progressBar = (data, aver) => {
  console.log("data aver", data, aver);
  const [key, setkey] = useState();

  const size = useWindowSize();

  let chartData = [['Indicator', 'Ocurrencies']];

  const [chartSize, setChartSize] = useState("1200px");
  const [chartHeight, setchartHeight] = useState("350px")

  useEffect(() => {
    setkey(prevKey => !prevKey);
    if (size.width > 1560) {
      setChartSize("1200px");
      setchartHeight("350px");
    } else {
      if (size.width > 1480) {
        setChartSize("1200px");
        setchartHeight("330px")
      } else {
        if (size.width > 1320) {
          setChartSize("1200px");
          setchartHeight("320px")
        } else {
          if (size.width > 1220) {
            setChartSize("1200px");
            setchartHeight("300px")
          } else {
            if (size.width > 1030) {
              setChartSize("1200px");
              setchartHeight("290px")
            } else {
              if (size.width > 880) {
                setChartSize("1000px");
                setchartHeight("260px")
              } else {
                if (size.width > 765) {
                  setChartSize("1000px");
                  setchartHeight("240px")
                } else {

                  if (size.width > 644) {
                    setChartSize("1000px");
                    setchartHeight("220px")

                  } else {
                    if (size.width > 590) {
                      setChartSize("800px");
                      setchartHeight("200px")
                    } else {
                      if (size.width <= 589) {
                        setChartSize("800px");
                        setchartHeight("150px")
                      };
                    }
                  }
                }
              }
            }
          }
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
      <CircularProgressbar
        value={aver}
        maxValue={50}
        text={`${aver}`}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgba(60, 150, 247)`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#d6d6d6',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the text
          text: {
            // Text color
            fill: '#f88',
            // Text size
            fontSize: '14px',
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#3e98c7',
          },
        }}
      />
    );
  }
};

function ProgressChart({ rawData, idx, aver }) {

  return (
    <div className="chart_data_display">
      {progressBar(rawData[idx], aver)}
    </div>
  );
}

export default ProgressChart;
