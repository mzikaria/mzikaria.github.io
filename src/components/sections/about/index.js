import React from 'react';
import './index.css';
import headshot from './headshot.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const AboutSection = () => {
  return (
    <div id="about-section" className="w-2/3">
      <div
        id="header-container"
        className="h-40 flex my-5"
      >
        <div
          id="intro-container"
          className={[
            'h-full',
            'w-1/2',
            'flex',
            'justify-end',
            'items-center',
            'p-4'
          ].join(' ')}
        >
          <div
            id="intro-text"
            className="text-xl"
          >
            Welcome to my page!
          </div>
        </div>
        <div
          id="image-container"
          className={[
            'h-full',
            'flex',
            'justify-start',
            'items-center',
            'w-1/2',
            'p-4'
          ].join(' ')}
        >
          <img
            style={{ height: '150px' }}
            className="rounded-full"
            src={headshot}
            alt="Mariam Zikaria Headshot"
          />
        </div>
      </div>
      <div
        id="description-container"
        className="flex my-5"
      >
        <div
          id="bio-container"
          className="w-1/2"
        >
          <div
            id="bio-text"
            className="text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          id="cta-container"
          className="w-1/2 flex flex-row flex-wrap"
        >
          <div className="basis-1/2 flex justify-center items-center">
            <div className="cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin}/> Linkedin
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <div className="cursor-pointer">
              <FontAwesomeIcon icon={faGithub}/> Github
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <div className="cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope}/> Email
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <div className="cursor-pointer">
              <FontAwesomeIcon icon={faFile}/> Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
