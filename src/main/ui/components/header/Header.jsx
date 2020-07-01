import React, {useState} from 'react';
import styles from './Header.module.css'
import castle from '../../icons/castle-40.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";
import {NavLink} from "react-router-dom";
import {PROFILE_PATH, ROOT_PATH} from "../routes/MainRoutes";
import {useSelector} from "react-redux"
import Logout from "../logout/Logout";

const Header = ({setModal, toggleBg}) => {

    const [openProfile, setProfile] = useState(false);
    let pathProfile = openProfile === false ? PROFILE_PATH : ROOT_PATH;
    const {isAuth} = useSelector((state) => state.login)

    return (
        <div className={styles.header}>
            <div className={styles.header__wrap}>
                <NavLink to={ROOT_PATH} className={styles.header__link}>
                    <div className={styles.header__logo}>
                        <img src={imgLogo} alt="logo"/>
                    </div>
                </NavLink>
                {(isAuth && <Logout />) || <Navbar setModal={setModal} toggleBg={toggleBg}/>}

                <NavLink to={pathProfile} className={styles.header__link} onClick={() => {
                    setProfile(!openProfile)
                }}>
                    <div className={styles.header__home} id='login'>
                        <img src={castle} alt="castle"/>
                        <div className={styles.tooltip}>
                            {
                                !isAuth &&
                                <div className={styles.tooltip_wrap}>
                                    <h4 className={styles.tooltip_title}>Sign in! </h4>
                                </div>
                            }
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Header