import React from 'react';
import PropTypes from 'prop-types';
import Input from './ModalInput/Input'
import styles from './LoginModal.module.scss';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LogInTab: true,
    }
  }
  
  ToggleLogIn = (e) => {
    this.setState({LogInTab: true})    
  }

  ToggleSignUp = (e) => {
    this.setState({LogInTab: false})  
  }

  onClose = (e) => {
    this.props.onClose();
  }

  onKeyUp = (e) => {
    console.log('key up event');
    if (e.which === 27 && this.props.show) {
      this.props.onClose();
    }
  }

  handleClick = (e) => {
    console.log('click event')
    if (this.props.show){
      if (this.node.contains(e.target)){
        return;
      }
      this.onClose();
    
    }
    
  }

  componentDidMount() {
    console.log('did mount')
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    console.log('will unmount')
    document.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousedown', this.handleClick);
  }

  render() {
    
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    if (this.state.LogInTab) {
      return (
        <div className={styles.backdropStyle}>
        
          <div className={styles.modalStyleLogIn}
            ref={node => this.node = node}
          >

            <div className={styles.buttonSwitch}>

              <button onClick={this.ToggleLogIn} className={styles.LogInButton}>Log In</button>

              <button onClick={this.ToggleSignUp} className={styles.LogInButtonUnactive}>Sign Up</button>          
            </div>
          
           <Input 
             id="username" 
             type="email" 
             placeholder="mrjackolai@gmail.com" 
           />

            <Input 
              id="password" 
              type="password" 
              placeholder="password" 
            />
        
            <button className={styles.btn}>Press Me</button>
      
          </div>
        </div>
      );
    }

    return (
      <div className={styles.backdropStyle}>
        <div className={styles.modalStyleSignUp}
         ref={node => this.node = node}
        >

        <div className={styles.buttonSwitch}>

          <button onClick={this.ToggleLogIn} className={styles.LogInButtonUnactive}>Log In</button>
  
          <button onClick={this.ToggleSignUp} className={styles.SignUpButton}>Sign Up</button>
        </div>
             
        <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
				<Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
				<Input id="password" type="password" placeholder="password" />
        <Input id="password" type="password" placeholder="confirm password" />
         
        </div>
      </div>
    );
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default LoginModal;