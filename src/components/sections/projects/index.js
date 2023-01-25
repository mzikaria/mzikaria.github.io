import React from 'react';
import './index.css';

const Project = ({
  isOdd,
  image,
  title,
  description,
  links: { demo, source }
}) => {
  if (isOdd) {
    return (
      <div className="project flex">
        <div className="w-1/2">
          {image}
        </div>
        <div className="w-1/2">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="flex gap-2">
            <div className="link">Demo</div>
            <div className="link">Source</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project flex">
      <div className="w-1/2">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="flex gap-2">
          <div className="link">Demo</div>
          <div className="link">Source</div>
        </div>
      </div>
      <div className="w-1/2">
        {image}
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const projects = [
    {
      image: 'example image',
      title: 'This is the title',
      description: 'This is the description',
      links: {
        demo: 'example demo',
        source: 'example source'
      }
    },
    {
      image: 'example image',
      title: 'This is the title',
      description: 'This is the description',
      links: {
        demo: 'example demo',
        source: 'example source'
      }
    }
  ]

  return (
    <div id="projects-section" className="w-2/3">
      {
        projects.map((project, index) => {
          return (
            <Project
              isOdd={index % 2 !== 0}
              image={project.image}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          )
        })
      }
    </div>
  );
}

export default ProjectsSection;
