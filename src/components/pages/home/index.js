import React, { Fragment } from 'react';
import './index.css';

import AboutSection from '../../sections/about';
import ProjectsSection from '../../sections/projects';
import WorkSection from '../../sections/work';

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <AboutSection />
      <hr className="h-px my-8 bg-gray-200 w-full border-0 dark:br-gray-700"/>
      <ProjectsSection />
      <hr className="h-px my-8 bg-gray-200 w-full border-0 dark:br-gray-700"/>
      <WorkSection />
    </div>
  );
}

export default Home;
