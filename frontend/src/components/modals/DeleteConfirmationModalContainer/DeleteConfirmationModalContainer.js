import React from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal/DeleteConfirmationModal"
import { connect } from 'react-redux';

class DeleteConfirmationModalContainer extends React.Component {
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
        <DeleteConfirmationModal 
          onClose={this.showModal} 
          show={this.state.show}
          productName={this.props.productName}
          partID={this.props.partID}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmationModalContainer);
