import React, { Component } from 'react';
import dashboardStyles from './Dashboard.module.scss';
import ProductGraph from '../product/ProductGraph/ProductGraph';
import LinkSubmission from '../submission/LinkSubmission/LinkSubmission';
import * as Button from '../buttons/Button';

const datA=[
  { a: new Date(2018, 8, 7), b: 265 },
  { a: new Date(2018, 8, 14), b: 276 },
  { a: new Date(2018, 8, 21), b: 284 },
  { a: new Date(2018, 8, 28), b: 293 },
  { a: new Date(2018, 9, 7), b: 264 },
  { a: new Date(2018, 9, 14), b: 279 },
  { a: new Date(2018, 9, 21), b: 284 },
  { a: new Date(2018, 9, 28), b: 271 },
  { a: new Date(2018, 10, 7), b: 292 },
  { a: new Date(2018, 10, 14), b: 300 },
  { a: new Date(2018, 10, 21), b: 308 },
  { a: new Date(2018, 10, 28), b: 294 },
  { a: new Date(2018, 11, 7), b: 283 },
  { a: new Date(2018, 11, 14), b: 263 },
  { a: new Date(2018, 11, 21), b: 225 },
  { a: new Date(2018, 11, 28), b: 204 },
  { a: new Date(2019, 0, 7), b: 288 },
  { a: new Date(2019, 0, 14), b: 299 },
  { a: new Date(2019, 0, 21), b: 307 },
  { a: new Date(2019, 0, 28), b: 314 },
  { a: new Date(2019, 1, 7), b: 314 },
  { a: new Date(2019, 1, 7), b: null },
  { a: new Date(2019, 1, 14), b: null },
  { a: new Date(2019, 1, 21), b: 323 },
  { a: new Date(2019, 1, 28), b: 359 },
  { a: new Date(2019, 2, 7), b: 379 },
  { a: new Date(2019, 2, 14), b: 390 },
  { a: new Date(2019, 2, 21), b: 439  },
  { a: new Date(2019, 2, 28), b: 373 },
  { a: new Date(2019, 3, 7), b:  348},
  { a: new Date(2019, 3, 14), b:  346},
  { a: new Date(2019, 3, 21), b:  378},
  { a: new Date(2019, 3, 28), b:  338},
  { a: new Date(2019, 4, 7), b:  348},
  { a: new Date(2019, 4, 14), b:  397},
  { a: new Date(2019, 4, 21), b:  438},
  { a: new Date(2019, 4, 28), b:  428},
  { a: new Date(2019, 5, 7), b:  493},
  { a: new Date(2019, 5, 14), b:  467},
  { a: new Date(2019, 5, 21), b:  500},
  { a: new Date(2019, 5, 28), b:  444},
  { a: new Date(2019, 6, 16), b:  444}
]
const datB=[
  { a: new Date(2019, 1, 7), b: 265 },
  { a: new Date(2019, 1, 14), b: 344 },
  { a: new Date(2019, 1, 21), b: 384 },
  { a: new Date(2019, 1, 28), b: 343 },
  { a: new Date(2019, 2, 7), b: 346 },
  { a: new Date(2019, 2, 14), b: 345 },
  { a: new Date(2019, 2, 21), b: 279 },
  { a: new Date(2019, 2, 28), b: 482 },
  { a: new Date(2019, 3, 7), b: 385 },
  { a: new Date(2019, 3, 14), b: 368 },
  { a: new Date(2019, 3, 21), b: 383 },
  { a: new Date(2019, 3, 28), b: 347 },
  { a: new Date(2019, 4, 7), b: 248 },
  { a: new Date(2019, 4, 14), b: 274 },
  { a: new Date(2019, 4, 21), b: 235 },
  { a: new Date(2019, 4, 28), b: 224 },
  { a: new Date(2019, 5, 7), b: 294 },
  { a: new Date(2019, 5, 14), b: 262 },
  { a: new Date(2019, 5, 21), b: 335 },
  { a: new Date(2019, 5, 28), b: 343 },
  { a: new Date(2019, 6, 16), b: 343 }
]
const datC=[
  { a: new Date(2019, 6, 16), b:  444},
  { a: new Date(2019, 6, 17), b:  444}
]

class Dashboard extends Component {
  

  render() {
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
      <div className={dashboardStyles.dashboard__charts}>
        <ProductGraph
          productName={"Gigabyte - GA-B250M-DS3H Micro ATX LGA1151 Motherboard"}
          data={datA}
        />
        <ProductGraph
          productName={"Corsair - CXM (2015) 450 W 80+ Bronze Certified Semi-modular ATX Power Supply"}
          data={datB}
        />  
        <ProductGraph
          productName={"G.Skill - NT Series 8 GB (2 x 4 GB) DDR4-2133 Memory"}
          data={datC}
        />  
      </div>
      <div>
        <LinkSubmission/>
      </div>
    </div>
    );
  }
}

export default Dashboard;