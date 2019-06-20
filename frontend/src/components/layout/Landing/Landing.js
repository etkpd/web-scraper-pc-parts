import React from 'react';
import LoginModalContainer from '../../modals/LoginModalContainer/LoginModalContainer'
import landingStyles from './Landing.module.scss'
import Button from '../../buttons/Button';

const Landing = () => {
  return (
    <section className={landingStyles.page}>
        <div className={landingStyles.content}>
          <h1 className={landingStyles.headerTitle}>PC Parts Price Tracker</h1>
          <div className={landingStyles.buttonContainer}>
            <LoginModalContainer>
              <Button
                label='Login'
              />
            </LoginModalContainer>
          </div>
        </div>
    </section>
  );
};

export default Landing;
