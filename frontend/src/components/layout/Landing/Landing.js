import React from 'react';
import LoginModalContainer from '../../modals/LoginModalContainer/LoginModalContainer'
import landingStyles from './Landing.module.scss'

const Landing = () => {
  return (
    <section className={landingStyles.page}>
        <div className={landingStyles.content}>
          <h1 className={landingStyles.headerTitle}>PC Parts Price Tracker</h1>
          <div className={landingStyles.buttonContainer}>

            <LoginModalContainer/>
          </div>
        </div>
    </section>
  );
};

export default Landing;
