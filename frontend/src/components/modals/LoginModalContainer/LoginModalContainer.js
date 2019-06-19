import React from "react";
import LoginModal from "../LoginModal/LoginModal"

class LoginModalContainer extends React.Component {
  state = {
    show: false
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

        <LoginModal onClose={this.showModal} show={this.state.show}>
        </LoginModal>

      </div>
    );
  }
}



export default LoginModalContainer;
