import React, { useState } from "react";
import styles from "./styles/ButtonDrawer.module.css";

function ButtonDrawer(props) {
  const [open, setOpen] = useState(false);

  const toggleDawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.containingDiv}>
        <hr className={styles.hr} />
        <div className={styles.box}>Filter</div>
        <button
          className={`${styles.plusButton} btn btn-link `}
          onClick={toggleDawer}
        >
          <i className={` ${styles.plusIcon} fas fa-plus-circle`}></i>
          <div className={styles.iBackground}></div>
        </button>
        <div className={styles.spacer} style={{height:`${open ? "5vh" : "15vh"}`}}> </div>
      </div>
        <div className={`${styles.buttonContainer} container`} style={{height:`${open ? "18vh" : "0"}`}}>
          {props.children}
        </div>
    </>
  );
}

export default ButtonDrawer;
