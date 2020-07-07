import styles from './FindDeckPopup.module.css';
import React from "react";


export default ({close}) => (
    <div className={styles.modal}>
        <a className={styles.close} onClick={close}>
            &times;
        </a>
        <div className={styles.header}> Select the deck to replace</div>
        <div className={styles.content}>
            SelectDeck

        </div>
    </div>
);