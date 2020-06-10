import React from 'react';
import styles from './Navbar.module.css';
import imgLogin from '../../images/login-shadow.png'
import { NavLink } from "react-router-dom";
import { REGISTRATION_PATH, LOGIN_PATH, RESTORE_PSW_PATH } from "../routes/FormRoutes";


const Navbar = ({ toggleBg }) => {

	const classForNavbar = toggleBg === true ? `${styles.navbar__wrap_notActive}` : `${styles.navbar__wrap}`;

	return (
		<div className={classForNavbar}>
			<nav className={styles.nav}>
				<input type="checkbox" className={styles.nav__cb} id="menu-cb"/>
				<div className={styles.nav__content}>
					<ul className={styles.nav__items}>
						<li className={styles.nav__item}>
							<NavLink to={LOGIN_PATH} className={styles.nav__item_text}>
								Sign in
							</NavLink>
						</li>
						<li className={styles.nav__item}>
							<NavLink to={REGISTRATION_PATH} className={styles.nav__item_text}>
								Registration
							</NavLink>
						</li>
						<li className={styles.nav__item}>
							<NavLink to={RESTORE_PSW_PATH} className={styles.nav__item_text}>
								Restore
							</NavLink>
						</li>
					</ul>
				</div>
				<label className={styles.nav__btn} htmlFor="menu-cb">
					<div className={styles.nav__login}>
						<img src={imgLogin} alt="login"/>
					</div>
				</label>
			</nav>
		</div>
	)
}
export default Navbar;