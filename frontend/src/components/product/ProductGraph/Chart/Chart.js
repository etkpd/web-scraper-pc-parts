import React from 'react';
import {  createContainer, 
          VictoryChart, 
          VictoryAxis, 
          VictoryLine, 
          VictoryGroup, 
          VictoryScatter, 
          VictoryTooltip,
          VictoryTheme } from 'victory';
import chartStyles from './Chart.module.scss';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

const Chart = ({zoomDomain, handleZoom, data}) =>{
  return (
    <div className={chartStyles.previewArea}>
      <VictoryChart 
        width={1036}
        height={233} 
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            allowZoom={false}
          />
        }
        theme={VictoryTheme.material}

      >
        <VictoryGroup
          data={data}
          x="a"
          y="b"
          labels={(d) => `Price: $${d.b} \n Date: ${Intl.DateTimeFormat('en-US').format(d.a)}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10 }}
            />
          }
        >          
          <VictoryLine
            interpolation={"stepAfter"}
          />
          <VictoryScatter
            size={(d, a) => {return a ? 3 : 1;}}
          />
        </VictoryGroup>                              
        <VictoryAxis
          tickValues={[]}
          tickFormat={(day) => {
            let date  = new Date(day)
            return new Intl.DateTimeFormat('en-US', {day: "2-digit", month: "short"}).format(date)
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x}`}
        />
      </VictoryChart>
    </div>
  );
}


export default Chart;
