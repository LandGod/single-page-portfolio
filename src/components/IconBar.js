import React from "react";
import styles from "./styles/IconBar.module.css";

class IconBar extends React.Component {
  render() {
    return (
      <div className="container" style={styles}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className={styles.iconBarIcons}>
                <span className={`${styles.iconSpan} col-2`}>
                  <i class="fas fa-laptop"></i>
                </span>
                <span className={`${styles.iconSpan} col-2`}>
                  <i class="fas fa-tablet-alt"></i>
                </span>
                <span className={`${styles.iconSpan} col-2`}>
                  <i class="fas fa-mobile"></i>
                </span>
              </div>
              <div className={`${styles.iconBarBar} col-12`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IconBar;
