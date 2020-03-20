import React from 'react';
import ProjectCard from "./ProjectCard";
import projects from '../assets/projects.json';

class Portfolio extends React.Component {

  state = {
    selectedTechs: []
  }

  hasSelectedTechs = (stack) => {
    // If no techs are selected, alwasy return truthy number 1
    // If card has all selected techs, return truthy number 2
    // If card is missing one or more selected techs, return falsy number 0
    if (this.state.selectedTechs.length === 0) { return 1 };

    for (let i = 0; i < this.state.selectedTechs.length; i++) {
      if (!stack.includes(this.state.selectedTechs[i])) {return 0};
    }

    return 2;
  }

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
                highlight={this.hasSelectedTechs(project.techStack)}
              />
            )
          })}
        </div>
    </div>
    );
  }
}

export default Portfolio;