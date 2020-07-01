import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import castle from '../../icons/castle-40.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";
import {NavLink} from "react-router-dom";
import {PROFILE_PATH, ROOT_PATH} from "../routes/MainRoutes";
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../../auth/login/loginReducer"
import Logout from "../logout/Logout";

const Header = ({setModal, toggleBg}) => {

    const [openProfile, setProfile] = useState(false);
    let pathProfile = openProfile === false ? PROFILE_PATH : ROOT_PATH;
    const {isAuth} = useSelector((state) => state.login)
    // const dispatch = useDispatch()
    //
    // const onLogout = () => {
    //     dispatch(logout())
    // }

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
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Header