import React from 'react';
import {  createContainer, 
          VictoryChart, 
          VictoryAxis, 
          VictoryLine, 
          VictoryGroup, 
          VictoryScatter, 
          VictoryTooltip } from 'victory';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

const Chart = ({zoomDomain, handleZoom, data}) =>{
  return (
    <div>
      <VictoryChart 
        width={900} 
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryGroup
          data={data}
          x="a"
          y="b"
          labels={(d) => `y: $${d.b} x: ${d.a}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10 }}
            />
          }
        >          
          <VictoryLine
            interpolation={"stepAfter"}
          />
          <VictoryScatter/>
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
          tickFormat={(x) => `$${x}.00`}
        />
      </VictoryChart>
    </div>
  );
}


export default Chart;
