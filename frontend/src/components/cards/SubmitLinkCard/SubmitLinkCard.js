import React, { Component } from 'react';
import { connect } from 'react-redux'
import submit_linkStyles from './SubmitLinkCard.module.scss';
import RemoveBtn from '../../buttons/RemoveBtn/RemoveBtn';
import * as Button from '../../buttons/Button';
import { addPart } from '../../../actions/partActions';
import loadingGif from '../../../assets/giphy.gif';


class SubmitLinkCard extends Component {
  state = {
    link:''
  }

  onChange = e =>{
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  onLinkSubmission = e =>{
    e.preventDefault();
    this.props.addPart(this.state.link)
  }

  render() {
    return (
      <div className={submit_linkStyles.card}>
        <div className={submit_linkStyles.close}>
          <RemoveBtn
            onClick={this.props.onClose}
          />
        </div>
        <div className={submit_linkStyles.content}>
          {!this.props.dataLoading ?  
            <>
              <p className={submit_linkStyles.prompt}>Copy and paste product page you want to follow.</p>
              <form   
                onSubmit={this.onLinkSubmission}
                >
                <input 
                  className={submit_linkStyles.submitInput} 
                  placeholder="https://pcpartpicker.com/product/FQ648d" 
                  type="text" 
                  name="link"
                  value={this.state.link}
                  onChange={this.onChange} 
                  />
                <Button.Secondary
                  label='Submit'
                  type='submit'
                  />
              </form>
            </>
            : <img src={loadingGif} alt='loading....' height="70" width="70"></img>
          }
        </div>
      </div>
    );
  }
}

const MapStateToProps = state =>({
  dataLoading: state.data.dataLoading
})

export default connect(MapStateToProps, { addPart })(SubmitLinkCard);