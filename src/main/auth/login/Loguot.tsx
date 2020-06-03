import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store/store";
import styles from "./Login.module.css"


//! Пока не используется, для усовершенствования формы логинизации. Если авторизация произошла успешно
// !покажи кнопку "log out"
const Logout = ({...props}) => {
    const {isAuth} = useSelector((state: AppStateType) => state.login)
    return <div className={styles.logout}>
        <div className={styles.image}> </div>
        <div className={styles.button_logout}>
            {isAuth
                ? <div className={styles.login}> {props.login}
                    <button>Log out
                    </button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>
};
export default Logout;