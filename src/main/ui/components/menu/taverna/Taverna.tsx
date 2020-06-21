import React from 'react';
import styles from './Taverna.module.css'


const Taverna: React.FC = (): any => {
    return (
        <div className={styles.taverna__wrap}>
            <div className={styles.taverna__left}>left </div>
            <div className={styles.taverna__main}>
                <div className={styles.main__item}>item </div>
                <div className={styles.main__item}>item </div>
                <div className={styles.main__item}>item </div>
                <div className={styles.main__item}>item </div>

            </div>
            <div className={styles.taverna__right}>right </div>
        </div>
    )
}
export default Taverna;