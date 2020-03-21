import React from "react";
import techs from "../assets/techs.json";
import styles from "./styles/TechSelect.module.css";

function TechSelect(props) {
  return (
    <div className="cotnainer">
      <div className="row justify-content-center">
        {techs.map((tech, i) => {
          return (
            <button key={i} onClick={() => {props.toggleTech(tech.name); console.log(`clicked ${tech.name}`)}} className={`col-1 ${styles.techLogoContainers}`}>
              <img
                alt={tech.caseSensitiveName}
                className={`img-fluid ${styles.techLogos}`}
                src={`${process.env.PUBLIC_URL}/techs/${tech.image}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TechSelect;
