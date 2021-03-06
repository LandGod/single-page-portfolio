import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json";
import TechSelect from "./TechSelect";
import Techs from "../assets/techs.json";
import ButtonDrawer from "./ButtonDrawer";
import { MediaContext } from "../contexts/MediaContext";

class Portfolio extends React.Component {
  state = {
    selectedTechs: [],
    drawerOpen: false,
  };

  toggleTech = (tech) => {
    // If tech is 'reset' blank out tech list
    if (tech === "reset") {
      this.setState({ selectedTechs: [] });
      return;
    }

    // Adds or removes the tech (string) from the selectedTechs array in the state
    let updatedTechList;
    if (this.state.selectedTechs.includes(tech)) {
      updatedTechList = this.state.selectedTechs.filter(
        (item) => item !== tech
      );
    } else {
      updatedTechList = [tech, ...this.state.selectedTechs];
    }

    this.setState({ selectedTechs: updatedTechList });
  };

  hasSelectedTechs = (stack) => {
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

  isSelectedTech = (tech) => {
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
      <MediaContext.Consumer>
        {(context) => {
          const { cantHover, smBreakPoint } = context;
          return (
            <div className="container flex flex-col mx-auto" id="portfolioSection">
              {" "}
              {/* Id used for linking to section, not for css. DO NOT DELETE. */}
              <div className="flex-row">
                <div className="w-full text-center">
                  <h1 className="text-5xl lg:text-6xl font-bold mb-2">Portfolio</h1>
                  <hr className="portfolio__hr" />
                </div>
              </div>
              <ButtonDrawer
                open={this.state.drawerOpen}
                toggle={this.toggleDawer}
                currentTechs={this.state.selectedTechs}
              >
                <div className="flex flex-row justify-center content-center">
                  {Techs.map((tech, i) => {
                    return (
                      <TechSelect
                        key={i}
                        name={tech.name}
                        image={tech.image}
                        caseSensitiveName={tech.caseSensitiveName}
                        toggleTech={this.toggleTech}
                        highlight={this.isSelectedTech(tech.name)}
                        suppressTooltip={cantHover}
                        open={this.state.drawerOpen}
                      />
                    );
                  })}
                  <div className="self-center justify-self-center w-1/6 md:w-1/12 flex">
                  <div
                    className="rounded-sm md:rounded-md text-xs md:text-sm px-1 py-0 md:p-2 md:text-md mx-auto self-center justify-self-center bg-gray-400 text-white"
                    onClick={() => this.toggleTech("reset")}
                    role="button"
                    aria-label={`Reset Filter: Show all projects`}
                    tabIndex={this.state.drawerOpen ? "0" : "-1"}
                    aria-hidden={!this.state.drawerOpen}
                  >
                    Reset
                  </div>
                  </div>
                </div>
              </ButtonDrawer>
              <div className="flex-row">
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
                      mobileSize={smBreakPoint}
                      summary={project.summary}
                    />
                  );
                })}
              </div>
            </div>
          );
        }}
      </MediaContext.Consumer>
    );
  }
}

export default Portfolio;
