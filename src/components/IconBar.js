import React from "react";

class IconBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="iconBarIcons">
                <span className="col-2">
                  <i class="fas fa-laptop"></i>
                </span>
                <span className="col-2">
                  <i class="fas fa-tablet-alt"></i>
                </span>
                <span className="col-2">
                  <i class="fas fa-mobile"></i>
                </span>
              </div>
              <div className="col-12 iconBarBar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconBar;
