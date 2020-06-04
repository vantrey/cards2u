import React from 'react';
import styles from './Header.module.css'
import castle from '../../icons/castle-40.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";

const Header = ({ setModal }) => {

	const activationModal = () => {
		setModal (true);
	};

	return (
		<div className={styles.header}>
			<div className={styles.header__wrap}>
				<div className={styles.header__logo}>
					<img src={imgLogo} alt="logo"/>
				</div>
				<Navbar/>
				<div className={styles.header__home} id='login' onClick={activationModal}>
					<img src={castle} alt="login"/>
				</div>
			</div>
		</div>
	)
}
export default Header