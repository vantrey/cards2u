import React from 'react';
import styles from './Navbar.module.css';
import imgLogin from '../../images/login-shadow.png'


const Navbar = ({ setModal, toggleBg }) => {

	const activationModal = () => {
		setModal (true);
	};
	const classForNavbar = toggleBg === true ? `${styles.navbar__wrap_notActive}` : `${styles.navbar__wrap}`;
	return (
		<div className={classForNavbar}>
			<nav className={styles.nav}>
				<input type="checkbox" className={styles.nav__cb} id="menu-cb"/>
				<div className={styles.nav__content}>
					<ul className={styles.nav__items}>
						<li className={styles.nav__item} onClick={activationModal}>
                            <span className={styles.nav__item_text}>
                                 Sign in
                            </span>
						</li>
						<li className={styles.nav__item} onClick={activationModal}>
                            <span className={styles.nav__item_text}>
                                 Registration
                            </span>
						</li>
						<li className={styles.nav__item} onClick={activationModal}>
                            <span className={styles.nav__item_text}>
                                Restore
                            </span>
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