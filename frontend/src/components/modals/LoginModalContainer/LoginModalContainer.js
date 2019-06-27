import React from "react";
import LoginModal from "./LoginModal/LoginModal"
import { connect } from 'react-redux';

class LoginModalContainer extends React.Component {
  state = {
    show: false,
    loading: false
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        
        <div onClick={this.showModal}>
          {children}
        </div>
        <LoginModal 
          onClose={this.showModal} 
          show={this.state.show}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);
