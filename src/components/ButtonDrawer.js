import React, { useState } from "react";
import styles from "./styles/ButtonDrawer.module.css";

function ButtonDrawer(props) {
  const [open, setOpen] = useState(false);

  const toggleDawer = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.containingDiv}>
      <hr className={styles.hr} />
      <div className={styles.box}>Filter</div>
      <button className={`${styles.plusButton} btn btn-link `}>
        <i className={` ${styles.plusIcon} fas fa-plus-circle`}></i>
        <div className={styles.iBackground} ></div>
      </button>
      <div
        className={`${styles.buttonContainer} ${styles.hidden} container`}
        onClick={toggleDawer}
      >
        {props.children}
      </div>
    </div>
  );
}

export default ButtonDrawer;
