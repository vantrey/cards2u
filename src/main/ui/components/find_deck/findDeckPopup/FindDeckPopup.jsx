import styles from './FindDeckPopup.module.css';
import React from "react";
import UserDecks from '../../../common/user/decks/UserDecks';

const FindDeckPopup = ({close}) => {

    return (
        <div className={styles.modal}>
            <a className={styles.close} onClick={close}>
                &times;
            </a>
            <div className={styles.header}> Select a deck for replacement or add a new deck.</div>
            <div className={styles.content}>
                <UserDecks/>
            </div>
        </div>
    )
}


export default FindDeckPopup;