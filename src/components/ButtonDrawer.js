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
        <h6 className={styles.box}>Filter</h6>
        <button
          className={`${styles.plusButton} btn btn-link `}
          onClick={props.toggle}
          style={{
            transform: `${
              props.open ? "rotate(45deg) translateX(1.9%)" : "rotate(0deg)"
            }`
          }}
        >
          <i className={` ${styles.plusIcon} fas fa-plus-circle`}></i>
          <div className={styles.iBackground}></div>
        </button>
      </div>
      <div
        className={`${styles.buttonContainer} container`}
        style={{
          height: `${props.open ? (props.mobileSize ? "36vh" : "18vh") : "0"}`
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default ButtonDrawer;