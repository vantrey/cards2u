import React from 'react';
import styles from './Menu.module.css'
import imgTaverna from '../../images/taverna-shadow2.png';
import imgPoint from '../../images/point-shadow2.png';
import imgAbout from "../../images/about-shadow2.png";
import imgClose from "../../images/clouse-shadow2.png";


const Menu: React.FC = (): any => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__wrap}>
                <div className={styles.menu__taverna}>
                    <img src={imgTaverna} alt="logo"/>
                </div>
                <div className={styles.menu__point}>
                    <img src={imgPoint} alt="point"/>
                </div>
                <div className={styles.menu__about}>
                    <img src={imgAbout} alt="about"/>
                </div>
                {/*<div className={styles.menu__close}>*/}
                {/*    <img src={imgClose} alt="close"/>*/}
                {/*</div>*/}

            </div>

        </div>
    )
}
export default Menu;