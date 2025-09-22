import React from 'react';
import styles from './mystyles.module.css';

function Supercode() {
    return (
        <>
            <p className={styles.testcss} id={styles["test_id"]}   >Ilife</p>
            <p id={styles["test_id"]}>Trichy</p>
            <p > React.js</p>
        </>

    )
}
export default Supercode;