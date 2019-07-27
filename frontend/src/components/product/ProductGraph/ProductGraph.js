import React, { Component } from 'react';
import Chart from './Chart/Chart';
import Header from './Header/Header';
import HistoryDropDown from './HistoryDropDown/HistoryDropDown';
import RemoveButton from './RemoveButton/RemoveButton';

import graphStyles from './ProductGraph.module.scss';


const timeSpanKeys = [
  "15 days",
  "30 days",
  "45 days",
  "2 months",
  "3 months",
  "Maximum"
];

const timeSpanDictionary ={
  "15 days":15,
  "30 days":30,
  "45 days":45,
  "2 months":60,
  "3 months":90,
  "Maximum":200
}


class ProductGraph extends Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(2019, 5, 16), new Date(2019, 6, 16)] },
      timeSpan: "30 days"
    };
  } 

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  
  componentDidMount = () => {
    this.getFilteredData(this.props.data)
  }

  changeZoomDomain (e){
    let span = timeSpanDictionary[e.target.value]
    let today = new Date()    
    let priorDate = new Date().setDate(today.getDate()-span)
    let newDomain = {x:[priorDate,today]}
    if (span === 200) {
      newDomain = {x:[this.props.data[0].date,today]}   
    }
    console.log(Intl.DateTimeFormat('en-US').format(priorDate),' - ', Intl.DateTimeFormat('en-US').format(today))          
    this.setState({
      zoomDomain: newDomain, 
      timeSpan: e.target.value
    })
  }

  getFilteredData = (data) => {      
    const filteredData = data.filter((point)=>{
      return point.date > this.state.zoomDomain.x[0].getTime() && point.date < this.state.zoomDomain.x[1].getTime() ? true : false
    });
    console.log(filteredData)
    return filteredData  
  }

/*   getFilteredData = (data) => {
    const {xMin, xMax} = this.state;
    const filteredData = [];
    const xMinTime = this.state.zoomDomain.x[0];
    const xMaxTime = this.state.zoomDomain.x[1];

    for (let i = 0, l = data.length; i < l; i++) {
      const time = data[i].time;
      if (time < xMinTime) continue;
      filteredData.push(data[i]);
      if (time > xMaxTime) break;
    }
    return filteredData;
  } */

  render() {
    return (
      <div className={graphStyles.productGraph}>
        <div className={graphStyles.productHeading}>
          <Header
            productName={this.props.productName}
            />
          <HistoryDropDown
            currentValue={this.state.timeSpan}
            values={timeSpanKeys}
            onChange={this.changeZoomDomain.bind(this)}
            />
          <RemoveButton/>
        </div>
        <hr className={graphStyles.style1}></hr>
        <Chart
          className={graphStyles.previewArea}
          data={this.props.data} 
          zoomDomain={this.state.zoomDomain}
        />
      </div>
    );
  }
}

export default ProductGraph;