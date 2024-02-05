import React from 'react';
import './Contact.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import {contactInfo} from '../../portfolio';
import {Fade} from 'react-reveal';

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance='20px'>
      <div className='main contact-margin-top' id='contact'>
        <div className='contact-div-main'>
          <div className='contact-header'>
            <h1 className='heading contact-title'>{contactInfo.title}</h1>
            <p className='subTitle contact-subtitle'>{contactInfo.subtitle}</p>
            <div className='contact-text-div'>
              <a className='contact-detail-email' href={'mailto:' + contactInfo.email_address}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className='contact-form'>
            <br />
            <iframe
              title='contact-form'
              src='https://app.hellobonsai.com/s/erik-soto/consultation-call?embed=true'
              width='100%'
              height='100%'
              style={{border: 'none', minHeight: '2500px'}}></iframe>
          </div>
        </div>
      </div>
    </Fade>
  );
}
