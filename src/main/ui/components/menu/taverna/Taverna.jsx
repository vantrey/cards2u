import React from 'react';
import styles from './Taverna.module.css'


const Taverna = ({toggleMenu}) => {
    const classForMenu = toggleMenu === true ? `${styles.taverna__wrap} ${styles.taverna__wrap_active}` : `${styles.taverna__wrap}`;

    return (
        <div className={ classForMenu }>
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