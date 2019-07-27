import React, { Component } from 'react';
import { connect } from 'react-redux';
import dashboardStyles from './Dashboard.module.scss';
// eslint-disable-next-line
import ProductGraph from '../product/ProductGraph/ProductGraph';
import LinkSubmission from '../submission/LinkSubmission/LinkSubmission';
import * as Button from '../buttons/Button';

// eslint-disable-next-line
const dataPoints = [
  {
    partName: 'Gigabyte - GA-B250M-DS3H Micro ATX LGA1151 Motherboard',
    _id: '5d372c31c378712c10d542ed',
    webpage: 'https://pcpartpicker.com/product/VM2rxr',
    priceLog: [
      {
        date: 1536292800000,
        price: 265
      },
      {
        date: 1536897600000,
        price: 276
      },
      {
        date: 1537502400000,
        price: 284
      },
      {
        date: 1538107200000,
        price: 293
      },
      {
        date: 1538884800000,
        price: 264
      },
      {
        date: 1539489600000,
        price: 279
      },
      {
        date: 1540094400000,
        price: 284
      },
      {
        date: 1540699200000,
        price: 271
      },
      {
        date: 1541566800000,
        price: 292
      },
      {
        date: 1542171600000,
        price: 300
      },
      {
        date: 1542776400000,
        price: 308
      },
      {
        date: 1543381200000,
        price: 294
      },
      {
        date: 1544158800000,
        price: 283
      },
      {
        date: 1544763600000,
        price: 263
      },
      {
        date: 1545368400000,
        price: 225
      },
      {
        date: 1545973200000,
        price: 204
      },
      {
        date: 1546837200000,
        price: 288
      },
      {
        date: 1547442000000,
        price: 299
      },
      {
        date: 1548046800000,
        price: 307
      },
      {
        date: 1548651600000,
        price: 314
      },
      {
        date: 1549515600000,
        price: 314
      },
      {
        date: 1549515600000,
        price: null
      },
      {
        date: 1550120400000,
        price: null
      },
      {
        date: 1550725200000,
        price: 323
      },
      {
        date: 1551330000000,
        price: 359
      },
      {
        date: 1551934800000,
        price: 379
      },
      {
        date: 1552536000000,
        price: 390
      },
      {
        date: 1553140800000,
        price: 439
      },
      {
        date: 1553745600000,
        price: 373
      },
      {
        date: 1554609600000,
        price: 348
      },
      {
        date: 1555214400000,
        price: 346
      },
      {
        date: 1555819200000,
        price: 378
      },
      {
        date: 1556424000000,
        price: 338
      },
      {
        date: 1557201600000,
        price: 348
      },
      {
        date: 1557806400000,
        price: 397
      },
      {
        date: 1558411200000,
        price: 438
      },
      {
        date: 1559016000000,
        price: 428
      },
      {
        date: 1559880000000,
        price: 493
      },
      {
        date: 1560484800000,
        price: 467
      },
      {
        date: 1561089600000,
        price: 500
      },
      {
        date: 1561694400000,
        price: 444
      },
      {
        date: 1563508800000,
        price: 444
      }
    ],
    __v: 0
  },
  {
    partName: 'Corsair - CXM (2015) 450 W 80+ Bronze Certified Semi-modular ATX Power Supply',
    _id: '5d372c31c378712c10d542ee',
    webpage: 'https://pcpartpicker.com/product/FQ648d',
    priceLog: [
      {
        date: 1549515600000,
        price: 265
      },
      {
        date: 1550120400000,
        price: 344
      },
      {
        date: 1550725200000,
        price: 384
      },
      {
        date: 1551330000000,
        price: 343
      },
      {
        date: 1551934800000,
        price: 346
      },
      {
        date: 1552536000000,
        price: 345
      },
      {
        date: 1553140800000,
        price: 279
      },
      {
        date: 1553745600000,
        price: 482
      },
      {
        date: 1554609600000,
        price: 385
      },
      {
        date: 1555214400000,
        price: 368
      },
      {
        date: 1555819200000,
        price: 383
      },
      {
        date: 1556424000000,
        price: 347
      },
      {
        date: 1557201600000,
        price: 248
      },
      {
        date: 1557806400000,
        price: 274
      },
      {
        date: 1558411200000,
        price: 235
      },
      {
        date: 1559016000000,
        price: 224
      },
      {
        date: 1559880000000,
        price: 294
      },
      {
        date: 1560484800000,
        price: 262
      },
      {
        date: 1561089600000,
        price: 335
      },
      {
        date: 1561694400000,
        price: 343
      },
      {
        date: 1563508800000,
        price: 343
      }
    ],
    __v: 0
  },
  {
    partName: 'G.Skill - NT Series 8 GB (2 x 4 GB) DDR4-2133 Memory',
    _id: '5d372c31c378712c10d542ef',
    webpage: 'https://pcpartpicker.com/product/pq38TW',
    priceLog: [
      {
        date: 1563249600000,
        price: 444
      },
      {
        date: 1563508800000,
        price: 444
      }
    ],
    __v: 0
  }
]


class Dashboard extends Component {
  render() {
    //const data = dataPoints;
    const data = this.props.data;

    let dashboardContent;
    // eslint-disable-next-line
    if(data == false){
      dashboardContent = <div></div>;
    } else{
      dashboardContent = (
         <div className={dashboardStyles.dashboard__charts}>
        {
          data.map((part)=>{
            return(
              <ProductGraph
              key={part._id}
              productName={part.partName}
              data={part.priceLog}
              />
              )
            })
          }
        </div> 
      )
    }

    return (
      <div className={dashboardStyles.dashboard}>
      <div className={dashboardStyles.headerSection}>
        <h1 className={dashboardStyles.headerTitle}>PC Parts Price Logs</h1>
        <div className={dashboardStyles.signoutBtnSection}>
          <div className={dashboardStyles.signoutBtn}>
            <Button.Primary
              type='button'
              label='Sign Out'
            />
          </div>
        </div>
      </div>
      {dashboardContent}
      <div>
        <LinkSubmission/>
      </div>
    </div>
    );
  }
}

const MapStateToProps = state =>({
  data: state.data
})

export default connect(MapStateToProps, {})(Dashboard);