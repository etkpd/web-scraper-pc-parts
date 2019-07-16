import React, { Component } from 'react';
import submit_linkStyles from './SubmitLinkCard.module.scss';
import RemoveBtn from '../../buttons/RemoveBtn/RemoveBtn';
import * as Button from '../../buttons/Button';


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
    console.log(this.state.link)
  }

  render() {
    return (
      <div className={submit_linkStyles.card}>
        <div className={submit_linkStyles.close}>
          <RemoveBtn/>
        </div>
        <div className={submit_linkStyles.content}>
          <p className={submit_linkStyles.prompt}>Copy and paste product page you want to follow.</p>
          <form 
            onSubmit={this.onLinkSubmission}
          >
            <input 
              ref={(node) => { this.input = node; }}
              className={submit_linkStyles.submitInput} 
              placeholder="https://pcpartpicker.com/product/FQ648d" 
              type="text" 
              name="link"
              onChange={this.onChange} 
            />
            <Button.Secondary
              label='Submit'
              type='submit'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitLinkCard;