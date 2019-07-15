import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginModalContainer from '../../modals/LoginModalContainer/LoginModalContainer'
import landingStyles from './Landing.module.scss'
import * as Button from '../../buttons/Button';

const Landing = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className={landingStyles.page}>
        <div className={landingStyles.content}>
          <h1 className={landingStyles.headerTitle}>PC Parts Price Tracker</h1>
          <div className={landingStyles.buttonContainer}>
            <LoginModalContainer>
              <Button.Primary
                label='Login'
              />
            </LoginModalContainer>
          </div>
        </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
