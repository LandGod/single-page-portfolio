import React from 'react';
import ProjectCard from "./ProjectCard";
import projects from '../assets/projects.json';

class Portfolio extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {projects.map((project) => {
            return (
              <ProjectCard 
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