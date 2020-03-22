import React, { useState } from "react";
import styles from "./styles/ButtonDrawer.module.css";

function ButtonDrawer(props) {

    const [open, setOpen] = useState(false);

    const toggleDawer = () => {
        setOpen(!open)
    };

    return (
        <>
            <hr className={styles.hr} />
            <div className={styles.box} ></div>
            <button className={styles.plusButton} ><i class="fas fa-plus-circle"></i></button>
            <div className={`${styles.buttonContainer} container`} onClick={toggleDawer}>
                {props.children}
            </div>
        </>
    )
}

export default ButtonDrawer;