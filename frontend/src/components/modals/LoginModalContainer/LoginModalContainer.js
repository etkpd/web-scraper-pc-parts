import React from "react";
import LoginModal from "../LoginModal/LoginModal"
import Button from '../../buttons/Button'

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
    return (
      <div>
      
        <Button 
          onClick={this.showModal}
        />

        <LoginModal onClose={this.showModal} show={this.state.show}>
        </LoginModal>

      </div>
    );
  }
}



export default LoginModalContainer;
