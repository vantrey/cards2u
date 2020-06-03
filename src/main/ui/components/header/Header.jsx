import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'
import imgLogin from '../../images/login-shadow.png'
import imgLogo from '../../images/Wisemen-shadow2.png'

const Header = () => {

	// ===== временно для работы =====
	useEffect (() => {
		let loginEl = document.getElementById ('login');
		let modalEl = document.getElementById ('modal');
		loginEl.addEventListener ('click', () => {
			modalEl.classList.add ('scroll__wrap_active');
		}, true);
	}, []);

    // =====

	return <div className={styles.header}>
		<div className={styles.header__wrap}>
			<div className={styles.header__logo}>
				<img src={imgLogo} alt="logo"/>
			</div>
			<div className={styles.header__login} id='login'>
				<img src={imgLogin} alt="login"/>
			</div>
		</div>
	</div>
}
export default Header