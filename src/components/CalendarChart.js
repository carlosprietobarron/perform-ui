import React, {useState, useEffect, useLayoutEffect} from "react";
import Chart from "react-google-charts";

const calendar = () => {

  const [key, setkey] = useState(false);
  //const [width, setWidth] = usState()
  const size = useWindowSize();

  useEffect(() => {
    setkey(prevKey => !prevKey);
    console.log("size", size);
  }, [size.width]);


  function useWindowSize(defaultValue) {
    const [windowSize, setWindowSize] = useState({
        innerWidth: defaultValue
    });

    useLayoutEffect(() => {
        setWindowSize({ innerWidth: window.innerWidth });
        console.log("innerw",innerWidth);
    }, []);

    return windowSize;
}
const windowSize = useWindowSize(900);

  return (
    <Chart
    key={key}
    width={windowSize-50}
    height={"350px"}
    chartType="Calendar"
    loader={<div>Loading Chart</div>}
    data={[
      [
        { type: "date", id: "Date" },
        { type: "number", id: "Won/Loss" },
      ],
      [new Date(2012, 3, 13), 37032],
      [new Date(2012, 3, 14), 38024],
      [new Date(2012, 3, 15), 38024],
      [new Date(2012, 3, 16), 38108],
      [new Date(2012, 3, 17), 38229],
      [new Date(2013, 1, 4), 38177],
      [new Date(2013, 1, 5), 38705],
      [new Date(2013, 1, 12), 38210],
      [new Date(2013, 1, 13), 38029],
      [new Date(2013, 1, 19), 38823],
      [new Date(2013, 1, 23), 38345],
      [new Date(2013, 1, 24), 38436],
      [new Date(2013, 2, 10), 38447],
    ]}
    options={{
      title: "Red Sox Attendance",
    }}
    rootProps={{ "data-testid": "1" }}
  />
  )
};

function CalendarChart({rawData, idx}) {

  console.log("raw data", rawData[idx]);

  return (
    <div>
      {calendar()}
    </div>
  );
}

export default CalendarChart;
