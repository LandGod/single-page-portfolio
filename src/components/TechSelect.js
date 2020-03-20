import React from 'react';
import techs from '../assets/techs.json';

function TechSelect(props) {
  return (
      <div>
          {techs.map((tech, i) => {
            return (
              <div key={i}> 
                
              </div>
            )
          })}
      </div>
  );
}

export default TechSelect;
