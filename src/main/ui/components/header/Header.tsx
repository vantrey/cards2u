import React from 'react';
import styles from './Header.module.css'
import imgLogin from '../../images/login-shadow.png'
import imgLogo from '../../images/Wisemen-shadow2.png'

const Header = () => {

    return <div className={styles.header}>
        <div className={styles.header__wrap}>
            <div className={styles.header__logo}>
                <img src={imgLogo} alt="logo"/>
            </div>
            <div className={styles.header__login}>
                <img src={imgLogin} alt="login"/>
            </div>
        </div>
    </div>
}
export default Header