import React, { Fragment } from 'react';
import './index.css';

import AboutSection from '../../sections/about';
import ProjectsSection from '../../sections/projects';

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
