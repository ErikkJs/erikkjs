import React from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import emoji from 'react-easy-emoji';

export default function Greeting() {
  let {title, subTitle, resumeLink} = greeting;
  return (
    <Fade bottom duration={1000} distance='40px'>
      <div className='greet-main' id='greeting'>
        <div className='greeting-main'>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text'>{title}</h1>
              <p className='greeting-text-p subTitle'>{subTitle}</p>
              <SocialMedia />
            </div>
          </div>
          <div className='greeting-image-div'>
            <img
              alt='me looking at graphs pretending to understand them'
              src={require('../../assets/images/charts.svg')}></img>
            <div className='button-greeting-div'>
              <Button text='Lets Talk' href='#contact' />
              <Button text='Read my Resume!' newTab={true} href={resumeLink} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
