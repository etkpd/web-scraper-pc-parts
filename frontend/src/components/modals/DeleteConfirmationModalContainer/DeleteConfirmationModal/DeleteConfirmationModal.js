import React from 'react';
import { connect } from 'react-redux'; 
import CancelBtn from '../../../buttons/CancelBtn/CancelBtn';
import styles from './DeleteConfirmationModal.module.scss';
import { deletePart } from '../../../../actions/partActions';

import { } from '../../../../actions/auth';

class DeleteConfirmationModal extends React.Component {  
  state = {
    errorState: false,
    errorFlag: false
  };
  
  deletePart = () => {
    this.props.deletePart(this.props.partID)
  }

  onClick = () => {
    this.setState({
      errorState: false
    })
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

  componentWillReceiveProps(nextProps) {
   /*  if(nextProps.errors.length>0 && !this.state.errorFlag){
      this.setState({ errorState: true, errorFlag: true })
    } */
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
    // eslint-disable-next-line 
    const { data } = this.state;

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdropStyle}>
        <div className={styles.modalStyleConfirmDelete}
          ref={node => this.node = node}
        >
          <div className={styles.close}>
            <CancelBtn
              onClick={this.props.onClose}
            />
          </div>
          <div className={styles.interface}>
          <h3>Are you sure you wish to delete?</h3>
          <p>{this.props.productName}</p>
          <div className={styles.buttons}>
            <button className={styles.buttons__cancel} onClick={this.props.onClose}>No, Cancel</button>
            <button className={styles.buttons__delete} onClick={this.deletePart}>Yes, Delete</button>
          </div>
          </div>
        </div>
      </div>
    );
  }

  
}

const mapStateToProps = state => ({
});


export default connect(mapStateToProps, { deletePart })(DeleteConfirmationModal);