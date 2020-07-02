import React from 'react';
import styles from './Taverna.module.css'
import { NavLink } from "react-router-dom";
import { CREATE_CARDS_PATH, FIND_DECK_PATH, GAME_PATH, HOME_PATH, PROFILE_PATH } from "../../routes/MainRoutes";


const Taverna = ({toggleMenu, setMenu}) => {

    const classForMenu = toggleMenu === true ? `${styles.taverna__wrap} ${styles.taverna__wrap_active}` : `${styles.taverna__wrap}`;

    return (
        <div className={ classForMenu }>
            <div className={styles.taverna__left}> </div>
            <div className={styles.taverna__main}>
                <div className={`${styles.main__item} ${ styles.main__item_pack}`} onClick={() => {setMenu(false)}}>
                    <NavLink to={GAME_PATH} className={ styles.main__link } >
                        <h1>GAME</h1>
                    </NavLink>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_card}`}  onClick={() => {setMenu(false)}}>
                    <NavLink to={CREATE_CARDS_PATH} className={ styles.main__link } >
                        <h1>CREATE CARDS</h1>
                    </NavLink>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_game}`}  onClick={() => {setMenu(false)}}>
                    <NavLink to={FIND_DECK_PATH} className={ styles.main__link } >
                        <h1>FIND A DECK</h1>
                    </NavLink>
                </div>
                <div className={`${styles.main__item} ${ styles.main__item_home}`} onClick={() => {setMenu(false)}}>
                    <NavLink to={HOME_PATH} className={ styles.main__link } >
                        <h1>HOME</h1>
                    </NavLink>
                </div>
            </div>
            <div className={styles.taverna__right}> </div>
        </div>
    )
}
export default Taverna;