import React, { useEffect, useState, useContext } from "react";
import styles from "./styles/ButtonDrawer.module.css";
import { MediaContext } from "../contexts/MediaContext";

function ButtonDrawer(props) {
  // Props:
  // >>toggle: function - from parent that toggles drawer. No agruments.
  // >>open: boolean - is drawer currently open.

  const [allowOverflow, setAllowOverflow] = useState(false);
  const mediaState = useContext(MediaContext);

  // In order to achieve a slide-out animated effect, overflow must be hidden while opening and closing (and while closed)
  // however, overflow must be allowed while fully open to allow tooltips to be displayed properly.
  // This effect, together with the allowOverFlow state allow overflow to be shown only when the drawer is fully open.

  useEffect(() => {
    // If component gets set to open after having been closed, allow overflow after animation finished (2 seconds)
    if (props.open) {
      const allowOverflowTrue = () => {
        setAllowOverflow(true);
      };
      const toolTipTimer = setTimeout(allowOverflowTrue, 2000);

      return () => {
        clearTimeout(toolTipTimer);
      };
    }
    //  If component gets closed after being open, imediately set overflow to false.
    else {
      setAllowOverflow(false);
    }
  }, [props.open, allowOverflow]);

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
            }`,
          }}
        >
          <i className={` ${styles.plusIcon} fas fa-plus-circle`}></i>
          <div className={styles.iBackground}></div>
        </button>
      </div>
      <div
        className={`${styles.buttonContainer} container`}
        style={{
          height: `${props.open ? (mediaState.smBreakPoint ? "36vh" : "18vh") : "0"}`,
          overflow: `${allowOverflow && props.open ? "visible" : "hidden"}`,
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default ButtonDrawer;
