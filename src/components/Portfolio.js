import React from 'react';
import ProjectCard from "./ProjectCard";
import projects from '../assets/projects.json';

class Portfolio extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-12 text-center portfolioHOne'>
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="row">
          {projects.map((project, i) => {
            return (
              <ProjectCard 
                key={i}
                width={project.width}
                imageName={project.imageName}
                title={project.title}
                repoLink={project.repoLink}
                deployLink={project.deployLink}
              />
            )
          })}
        </div>
    </div>
    );
  }
}

export default Portfolio;