/* eslint-disable max-len, react/prop-types, no-constant-condition,  no-irregular-whitespace */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
// import { JustADate } from './utility';

const progressBar = (data, aver) => {
  if (false) {
    return (
      <div>
        <h3>There is no Data</h3>
      </div>
    );
  }

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
          stroke: 'rgba(60, 150, 247)',
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
};

function ProgressChart({ rawData, idx, aver }) {
  return (
    <div className="chart_data_display">
      {progressBar(rawData[idx], aver)}
    </div>
  );
}

export default ProgressChart;

/* eslint-enable max-len, react/prop-types, no-constant-condition,  no-irregular-whitespace */
