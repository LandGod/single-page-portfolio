import React from "react";
import styles from "./styles/ButtonDrawer.module.css";

function ButtonDrawer(props) {

  // Props:
  // >>toggle: function - from parent that toggles drawer. No agruments.
  // >>open: boolean - is drawer currently open.

  return (
    <>
      <div className={styles.containingDiv}>
        <hr className={styles.hr} />
        <div className={styles.box}>Filter</div>
        <button
          className={`${styles.plusButton} btn btn-link `}
          onClick={props.toggle}
        >
          <i className={` ${styles.plusIcon} fas fa-plus-circle`}></i>
          <div className={styles.iBackground}></div>
        </button>
        <div className={styles.spacer} style={{height:`${props.open ? "5vh" : "15vh"}`}}> </div>
      </div>
        <div className={`${styles.buttonContainer} container`} style={{height:`${props.open ? props.mobileSize ? "36vh" : "18vh" : "0"}`}}>
          {props.children}
        </div>
    </>
  );
}

export default ButtonDrawer;
