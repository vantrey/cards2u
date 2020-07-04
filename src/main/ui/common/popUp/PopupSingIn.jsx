import React from 'react';
import styles from './PopupSingIn.module.css';
import decor from '../../images/decor.png';
import { NavLink } from "react-router-dom";
import { LOGIN_PATH, REGISTRATION_PATH, RESTORE_PSW_PATH } from "../../components/routes/FormRoutes";


const PopupSingIn = () => {

	return (
		<div className={styles.popup__wrap}>
			<NavLink to={LOGIN_PATH} className={styles.popup__link}>
				<div className={styles.popup__item}>
					<p className={styles.popup__text}>If you have an account</p>
					<p className={styles.popup__text}>click here to:&nbsp;
						<strong className={styles.popup__text_strong}>Login</strong>
					</p>
				</div>
			</NavLink>
			<NavLink to={REGISTRATION_PATH} className={styles.popup__link}>
				<div className={styles.popup__item}>
					<p className={styles.popup__text}>Don't have an account? Create one </p>
					<p className={styles.popup__text}>click here to:&nbsp;
						<strong className={styles.popup__text_strong}>Registration</strong>
					</p>
				</div>
			</NavLink>
			<NavLink to={RESTORE_PSW_PATH} className={styles.popup__link}>
				<div className={styles.popup__item}>
					<p className={styles.popup__text}>Forgot password? </p>
					<p className={styles.popup__text}>click here to:&nbsp;
						<strong className={styles.popup__text_strong}>Restore password</strong>
					</p>
				</div>
			</NavLink>
			<div className={styles.popup__decor}>
				<img src={decor} alt='decor'/>
			</div>
		</div>
	)
}

export default PopupSingIn;