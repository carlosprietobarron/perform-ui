import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  MarkSeries,
  Hint
} from 'index';

const CHART_MARGINS = {left: 50, right: 10, top: 10, bottom: 25};
const DATA = [{x: 1, y: 5}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 15}];
const YMAX = 15;


function plotChart() {

    const {value} = this.state;
    
    return (
      <XYPlot width={300} height={300} margin={CHART_MARGINS}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries onNearestX={this._rememberValue} data={DATA} />
        {value ? (
          <LineSeries
            data={[{x: value.x, y: value.y}, {x: value.x, y: YMAX}]}
            stroke="black"
          />
        ) : null}
        {value ? (
          <Hint
            value={value}
            align={{horizontal: Hint.ALIGN.AUTO, vertical: Hint.ALIGN.TOP_EDGE}}
          >
            <div className="rv-hint__content">{`(${value.x}, ${value.y})`}</div>
          </Hint>
        ) : null}
      </XYPlot>
    
);

}

export default plotChart
