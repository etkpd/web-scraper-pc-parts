import React from 'react';
import PropTypes from 'prop-types';
import Input from './ModalInput/Input'
import styles from './LoginModal.module.scss';
import { connect } from 'react-redux'; 

import { login } from '../../../actions/auth';



class LoginModal extends React.Component {  
  state = {
    data: {
      username: "",
      password: ""
    }
  };
  
  onSubmit = e =>{
    e.preventDefault();
    this.props.login(this.state.data.username, this.state.data.password);

  }

  onChange = e =>{
   this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onClose = (e) => {
    this.props.onClose();
  }

  onKeyUp = (e) => {
    if (e.which === 27 && this.props.show) {
      this.props.onClose();
    }
  }

  handleClick = (e) => {
    if (this.props.show){
      if (this.node.contains(e.target)){
        return;
      }
      this.onClose();
    
    }
    
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousedown', this.handleClick);
  }

  render() {
    const { data } = this.state;

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdropStyle}>
        <div className={styles.modalStyleLogIn}
          ref={node => this.node = node}
        >
          <div className={styles.interface}>
            <div className={styles.modalHeader}>
              Sign Into Your Account          
            </div>
            <form
               onSubmit={this.onSubmit}
            >
              <Input 
                className={styles.inputLoginModal}
                id="username" 
                type="text"
                name="username"
                placeholder="username" 
                value={data.username}
                onChange={this.onChange} 
                />
              <Input 
                className={styles.inputLoginModal}
                id="password" 
                type="password" 
                name="password"
                placeholder="password" 
                value={data.password}
                onChange={this.onChange} 
                />
              <button type="submit" className={styles.btn}>Login</button>
             </form>
          </div>
        </div>
      </div>
    );
  }

  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default connect(mapStateToProps, { login })(LoginModal);