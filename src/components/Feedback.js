import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Feedback.css'
import { Button } from './Button';

function Feedback() {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_g8zjfpa',
        'template_znqthoy',
        form.current,
        'ORWO63v6JkH7rDsng',
      )
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='form' id='feedback'>
      <h1>Feedback</h1>
      <div className="form_container">
      <form ref={form} onSubmit={sendEmail} className="form__button">
        <div className="user_name_container">
          <label htmlFor="user_name" className="user_name">Name:</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="user_name"
            required
          />
        </div>
        <div className="user_email_container">
          <label htmlFor="user_email" className="user_email">Email:</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="user_email"
            required
          />
        </div>
        <div className="msg_container">
          <label htmlFor="message" className="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="message"
            placeholder="Give me comments to improve!"
            required
          ></textarea>
        </div>
        <div className='btn_container'>
          <Button type="submit" 
          disabled={isSent} 
          className='btn'
          buttonStyle='btn--submit'
          buttonSize='btn--large'
          >
          Send</Button>
        </div>
        <div className='sent__msg'>
          {isSent && <p>Message sent!</p>}
        </div>
      </form>
      </div>
    </div>
  )
}

export default Feedback