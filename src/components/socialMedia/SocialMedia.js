import React from 'react';
import './SocialMedia.css';
import {socialMediaLinks} from '../../portfolio';

export default function socialMedia() {
  return (
    <div className='social-media-div'>
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className='icon-button github'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className='icon-button linkedin'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-linkedin-in'></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className='icon-button facebook'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-facebook-f'></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className='icon-button medium'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-medium'></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
