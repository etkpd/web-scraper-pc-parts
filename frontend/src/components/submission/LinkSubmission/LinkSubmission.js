import React, { Component } from 'react';
import SubmitLinkCard from '../../cards/SubmitLinkCard/SubmitLinkCard';
import AddPartLinkBtn from '../../buttons/AddPartLinkBtn/AddPartLinkBtn';
import submissionStyles from './LinkSubmission.module.scss';

class LinkSubmission extends Component {
  state = {
    showSubmitForm: false
  }

  onToggleSubmitForm = e =>{
    const toggle =  !this.state.showSubmitForm
    this.setState({
      showSubmitForm: toggle
    })
  }

  render() {
    return (
      <div>
        {this.state.showSubmitForm
          ? (
            <div className={submissionStyles.submission__submitLinkCard}>
              <SubmitLinkCard
                onClose={this.onToggleSubmitForm}
              />
            </div>
          ) : (
            <div className={submissionStyles.submission__addPartBtn}>
              <AddPartLinkBtn
                onClick={this.onToggleSubmitForm}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default LinkSubmission;