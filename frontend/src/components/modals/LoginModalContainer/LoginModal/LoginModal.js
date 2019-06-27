import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Input from './ModalInput/Input'
import styles from './LoginModal.module.scss';
import { connect } from 'react-redux'; 

//import PopupAlert from '../../../alerts/popupalert/PopupAlert';

import { login } from '../../../../actions/auth';

import loadingGif from '../../../../assets/giphy.gif';
import PopupAlert from '../../../alerts/popupalert/PopupAlert';

class LoginModal extends React.Component {  
  state = {
    data: {
      username: "",
      password: ""
    },
    errorState: false,
    errorFlag: false
  };
  
  onSubmit = e =>{
    e.preventDefault();
    this.props.login(this.state.data.username, this.state.data.password);
    this.setState({errorFlag: false})
  }

  onChange = e =>{
   this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
      errorState: false
    });
  }

  onClick = () => {
    this.setState({
      errorState: false
    })
  }

  onClose = (e) => {
    this.props.onClose();
    this.setState({data:{username: "", password: ""}, errorState: false})
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

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors.length>0 && !this.state.errorFlag){
      this.setState({ errorState: true, errorFlag: true })
    }
    console.log('will receive props')
    console.log(this.state.errorFlag)
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
            {!this.props.loading ?
              <>
              <div className={styles.modalHeader}>
                Sign Into Your Account          
              </div>
              <form
               onSubmit={this.onSubmit}
              >
                <Input 
                  className={this.state.errorState ? styles.inputLoginModalErrors : styles.inputLoginModal}
                  id="username" 
                  type="text"
                  name="username"
                  placeholder="username" 
                  value={data.username}
                  onChange={this.onChange} 
                  />
                <Input 
                  className={this.state.errorState ? styles.inputLoginModalErrors :  styles.inputLoginModal }     
                  id="password" 
                  type="password" 
                  name="password"
                  placeholder="password" 
                  value={data.password}
                  onChange={this.onChange} 
                  />
                <button type="submit" className={styles.btn}>Login</button>
              </form>
              </>
              :<img src={loadingGif} alt='loading....' height="70" width="70"></img>
            }
          </div>
          <>
            {/* 
             {this.props.errors.length > 0 && <PopupAlert/>}   
           */}
          
          <CSSTransition
              in={this.state.errorState}
              timeout={1000}
              classNames={{...styles}}
              unmountOnExit
            >
            <PopupAlert 
              onClick={this.onClick}
            />
          </CSSTransition>
          </>
        </div>
      </div>
    );
  }

  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.alert
});

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default connect(mapStateToProps, { login })(LoginModal);