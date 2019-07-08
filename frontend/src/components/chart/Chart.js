import React from 'react';
import {  createContainer, 
          VictoryChart, 
          VictoryAxis, 
          VictoryLine, 
          VictoryGroup, 
          VictoryScatter, 
          VictoryTooltip } from 'victory';
import DropDownMenu from './Buttons/DropDownMenu/DropDownMenu';



const timeSpanKeys = [
  "15 days",
  "30 days",
  "45 days",
  "2 month",
  "3 month",
  "Full"
];

const timeSpanDictionary ={
  "15 days":15,
  "30 days":30,
  "45 days":45,
  "2 month":60,
  "3 month":90,
  "Full":200
}


const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(2019, 4, 30), new Date(2019, 6, 8)] },
      timeSpan: "30 days"
    };
  } 

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  
  changeZoomDomain (e){
    let span = timeSpanDictionary[e.target.value]
    let today = new Date()    
    let priorDate = new Date().setDate(today.getDate()-span)
    let newDomain = {x:[priorDate,today]}
    if (span === 200) {
      newDomain = {x:[this.props.data[0].a,today]}   
      console.log(this.props.data[0].a)    
    }

  	this.setState({
      zoomDomain: newDomain, 
      timeSpan: e.target.value
    })
  }

  render() {
    return (
     <div>
        <DropDownMenu
          currentValue={this.state.timeSpan}
          values={timeSpanKeys}
          onChange={this.changeZoomDomain.bind(this)}
        />

        <VictoryChart 
          width={900} 
          containerComponent={
            <VictoryZoomVoronoiContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
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
          
                 
          <VictoryGroup
            data={this.props.data}
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
            <VictoryScatter
             
            />
          </VictoryGroup>
                                              
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
