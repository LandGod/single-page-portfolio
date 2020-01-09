import React from "react";

class IconBar extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="iconBarIcons mx-auto">
          <span>
            <i class="fas fa-laptop"></i>
          </span>
          <span>
            <i class="fas fa-tablet-alt"></i>
          </span>
          <span>
            <i class="fas fa-mobile"></i>
          </span>
        </div>
        <div className="iconBarBar mx-auto"></div>
      </div>
    );
  }
}

export default IconBar;
