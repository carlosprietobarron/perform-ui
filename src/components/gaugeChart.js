/* eslint-disable max-len, react/prop-types, no-constant-condition */

import React from 'react';
import Chart from 'react-google-charts';
import { JustADate } from './utility';

const gauge = (data) => {
  // const [goal, setGoal] = useState(0);
  const convertDate = (meas) => {
    const arr = meas.split('-');
    const ret = [];
    arr.forEach((item) => {
      ret.push(parseInt(item, 10));
    });
    return new Date(ret);
  };

  function format(date) {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return `${y}-${m <= 9 ? `0${m}` : m}-${d <= 9 ? `0${d}` : d}`;
  }

  function badEmptyCheck(value) {
    return Object.keys(value).length === 0;
  }

  let chartData = [];
  const date1 = new Date();
  date1.setDate(date1.getDate() - 1);
  const date2 = new Date();
  date2.setDate(date2.getDate() - 2);
  const date3 = new Date();
  date3.setDate(date3.getDate() - 3);

  if (data.measures.length > 0) {
    const day3 = { ...data.measures.find((m) => JustADate(convertDate(m.day)).toString() === JustADate(date1).toString()) };
    const day2 = { ...data.measures.find((m) => JustADate(convertDate(m.day)).toString() === JustADate(date2).toString()) };
    const day1 = { ...data.measures.find((m) => JustADate(convertDate(m.day)).toString() === JustADate(date3).toString()) };

    chartData = [['Day', 'Ocurrencies']];

    if (!badEmptyCheck(day1)) { chartData.push([day1.day, day1.measure]); } else { chartData.push([format(date3), 0]); }

    if (!badEmptyCheck(day2)) { chartData.push([day2.day, day2.measure]); } else { chartData.push([format(date2), 0]); }

    if (!badEmptyCheck(day3)) { chartData.push([day3.day, day3.measure]); } else { chartData.push([format(date3), 0]); }
  } else {
    chartData = [
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
    );
  }
  return (
    <Chart
      width={450}
      height={145}
      chartType="Gauge"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        redFrom: 0,
        redTo: Math.round(data.goal * 0.5),
        yellowFrom: Math.round(data.goal * 0.5),
        yellowTo: data.goal,
        minorTicks: 5,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

function GaugeChart({ rawData, idx }) {
  return (
    <div className="chart_data_display">
      {gauge(rawData[idx])}
    </div>
  );
}

export default GaugeChart;

/* eslint-disable max-len, react/prop-types, no-constant-condition */
