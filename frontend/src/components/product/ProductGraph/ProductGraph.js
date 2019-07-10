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
        zoomDomain: { x: [new Date(2019, 4, 30), new Date(2019, 6, 9)] },
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
        <div className={graphStyles.productGraph}>
          <Header
            productName={this.props.productName}
          />
          <HistoryDropDown
            currentValue={this.state.timeSpan}
            values={timeSpanKeys}
            onChange={this.changeZoomDomain.bind(this)}
            />
          <RemoveButton/>
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