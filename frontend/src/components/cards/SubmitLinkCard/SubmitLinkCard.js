import React from 'react';
import submit_linkStyles from './SubmitLinkCard.module.scss';
import RemoveBtn from '../../buttons/RemoveBtn/RemoveBtn';
import * as Button from '../../buttons/Button';

const SubmitLinkCard = () => {
  return (
    <div className={submit_linkStyles.card}>
      <RemoveBtn/>
      <p>Copy and paste product page you want to follow.</p>
      <input type="text" className={submit_linkStyles.submitInput} placeholder="https://pcpartpicker.com/product/FQ648d" value=""></input>
      <Button.Secondary
        label='Submit'
      />
    </div>
  );
};

export default SubmitLinkCard;