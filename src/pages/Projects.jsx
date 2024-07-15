import React from 'react';
import { CTA } from '../components/CTA';

const Projects = () => {
  const projectDetails = [
    {
      title: 'Project One',
      description: 'A brief description of project one, outlining its main features and technologies used.',
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two, highlighting its key components and objectives.',
      link: 'https://example.com/project-two'
    },
    {
      title: 'Project Three',
      description: 'A brief description of project three, emphasizing its unique aspects and outcomes.',
      link: 'https://example.com/project-three'
    },
  ];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous projects throughout the years, but these are the ones I would mention.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDetails.map((project, index) => (
          <div key={index} className="project-card p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-slate-500 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
      <CTA/>
    </section>
  );
};

export default Projects;
