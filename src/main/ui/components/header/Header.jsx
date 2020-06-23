import React from 'react';
import styles from './Header.module.css'
import castle from '../../icons/castle-40.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import { PROFILE_PATH } from "../routes/MainRoutes";

const Header = ({ setModal, setBg, toggleBg }) => {
	const switchBg = () => {
		setBg(!toggleBg);
	}
	return (
		<div className={styles.header} >
			<div className={styles.header__wrap}>
				<div className={styles.header__logo} onClick={switchBg}>
					<img src={imgLogo} alt="logo"/>
				</div>
				<Navbar setModal={setModal} toggleBg={toggleBg}/>
				<NavLink to={PROFILE_PATH} className={ styles.header__link } >
					<div className={styles.header__home} id='login' >
						<img src={castle} alt="login"/>
					</div>
				</NavLink>

			</div>
		</div>
	)
}
export default Header