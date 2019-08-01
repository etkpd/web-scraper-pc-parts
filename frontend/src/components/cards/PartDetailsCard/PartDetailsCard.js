import React, { Component } from 'react';
import Chart from './Chart/Chart';
import Header from './Header/Header';
import HistoryDropDown from './HistoryDropDown/HistoryDropDown';
import RemoveButton from './RemoveButton/RemoveButton';
import DeleteConfirmationModalContainer from '../../modals/DeleteConfirmationModalContainer/DeleteConfirmationModalContainer';

import partDetailsCardStyles from './PartDetailsCard.module.scss';

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

const defaultCurrentDate = new Date()
const defaultHistorySpan = 30
const defaultPastDate = new Date().setDate(defaultCurrentDate.getDate()-defaultHistorySpan)

class partDetailsCard extends Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [defaultPastDate, defaultCurrentDate] },
      timeSpan: "30 days"
    };
  } 

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  
  componentDidMount = () => {
    //this.getFilteredData(this.props.data)
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
      <div className={partDetailsCardStyles.partDetailsCard}>
        <div className={partDetailsCardStyles.productHeading}>
          <Header
            productName={this.props.productName}
            />
          <HistoryDropDown
            currentValue={this.state.timeSpan}
            values={timeSpanKeys}
            onChange={this.changeZoomDomain.bind(this)}
            />
          <DeleteConfirmationModalContainer
            productName={this.props.productName}
            partID={this.props.partID}
          >
            <RemoveButton/>
          </DeleteConfirmationModalContainer>
        </div>
        <hr className={partDetailsCardStyles.style1}></hr>
        <Chart
          className={partDetailsCardStyles.previewArea}
          data={this.props.data} 
          zoomDomain={this.state.zoomDomain}
        />
      </div>
    );
  }
}

export default partDetailsCard;