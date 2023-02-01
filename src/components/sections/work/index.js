import React from 'react';
import './index.css';

const Experience = ({ title, description, isOdd }) => {
  if (isOdd) {
    return (
      <div class="container left">
        <div class="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div class="container right">
      <div class="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}


const WorkSection = () => {
  const experiences = [
    {
      title: 'This is the title',
      description: 'This is the description',
    },
    {
      title: 'This is the title',
      description: 'This is the description',
    },
    {
      title: 'This is the title',
      description: 'This is the description',
    },
    {
      title: 'This is the title',
      description: 'This is the description',
    }
  ]

  return (
    <div id="work-section" className="w-2/3">
      <div class="timeline">
        {
          experiences.map((experience, index) => {
            return (
              <Experience
                isOdd={index % 2 !== 0}
                title={experience.title}
                description={experience.description}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default WorkSection;
