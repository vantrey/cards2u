import React from 'react';
import styles from './Taverna.module.css'


const Taverna: React.FC = (): any => {
    return (
        <div className={styles.taverna__wrap}>
            <div className={styles.taverna__left}> </div>
            <div className={styles.taverna__main}>
                <div className={`${styles.main__item} ${ styles.main__item_pack}`}>
                   <h1>GAME</h1>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_card}`}>
                    <h1>CREATE CARDS</h1>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_game}`}>
                    <h1>FIND A DECK</h1>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_home}`}>
                    <h1>HOME</h1>
                </div>
            </div>
            <div className={styles.taverna__right}> </div>
        </div>
    )
}
export default Taverna;