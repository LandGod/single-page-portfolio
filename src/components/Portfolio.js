import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json";
import TechSelect from "./TechSelect";
import Techs from "../assets/techs.json";
import ButtonDrawer from "./ButtonDrawer";

class Portfolio extends React.Component {
  state = {
    selectedTechs: [],
    drawerOpen: false
  };

  toggleTech = tech => {
    // If tech is 'reset' blank out tech list
    if (tech === "reset") {
      this.setState({ selectedTechs: [] });
      return;
    }

    // Adds or removes the tech (string) from the selectedTechs array in the state
    let updatedTechList;
    if (this.state.selectedTechs.includes(tech)) {
      updatedTechList = this.state.selectedTechs.filter(item => item !== tech);
    } else {
      updatedTechList = [tech, ...this.state.selectedTechs];
    }

    this.setState({ selectedTechs: updatedTechList });
  };

  hasSelectedTechs = stack => {
    // If no techs are selected, alwasy return truthy number 1
    // If card has all selected techs, return truthy number 2
    // If card is missing one or more selected techs, return falsy number 0
    if (this.state.selectedTechs.length === 0) {
      return 1;
    }

    for (let i = 0; i < this.state.selectedTechs.length; i++) {
      if (!stack.includes(this.state.selectedTechs[i])) {
        return 0;
      }
    }

    return 2;
  };

  isSelectedTech = tech => {
    if (this.state.selectedTechs.length === 0) {
      return 1;
    }

    if (this.state.selectedTechs.includes(tech)) {
      return 2;
    }

    return 0;
  };

  toggleDawer = () => {
    // For tech drawer (ButtonDrawer) open/close
    // If closing drawer, also reset techs
    if (this.state.drawerOpen) {
      this.toggleTech("reset");
    }
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    return (
      <div className="container" id="portfolioSection">
        <div className="row">
          <div className="col-12 portfolioHOne">
            <h1>Portfolio</h1>
          </div>
        </div>
        <ButtonDrawer
          open={this.state.drawerOpen}
          toggle={this.toggleDawer}
          mobileSize={this.props.mobileSize}
        >
          <div className="row justify-content-center">
            {Techs.map((tech, i) => {
              return (
                <TechSelect
                  key={i}
                  name={tech.name}
                  image={tech.image}
                  caseSensitiveName={tech.caseSensitiveName}
                  toggleTech={this.toggleTech}
                  highlight={this.isSelectedTech(tech.name)}
                  suppressTooltip={this.props.noHover}
                />
              );
            })}
            <div
              style={{ paddingTop: "6vh", paddingBottom: "6vh" }}
              className="col-2 col-md-1 btn btn-link"
              onClick={() => this.toggleTech("reset")}
            >
              Reset
            </div>
          </div>
        </ButtonDrawer>
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
                mobileSize={this.props.mobileSize}
                summary={project.summary}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
