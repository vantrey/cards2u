import React, { useState } from 'react';
import styles from './Header.module.css'
import castle from '../../icons/castle-40.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";
import { NavLink, Redirect } from "react-router-dom";
import { PROFILE_PATH, ROOT_PATH } from "../routes/MainRoutes";
import { useSelector } from "react-redux"
import Logout from "../logout/Logout";
import { useHistory } from "react-router";


const Header = ({ setModal, toggleBg, setMenu, setAbout, openProfile, setProfile }) => {

	const { isAuth } = useSelector ((state) => state.login);
	const history = useHistory ();
	const onToggleProfile = () => {

        setMenu (false);
        setAbout (false);
        setProfile (!openProfile);

	    if(openProfile) {
            history.push(`${PROFILE_PATH}`);
        } else {
            history.push(`${ROOT_PATH}`);
        }
	}

	const classForProfile = toggleBg === true ? `${styles.header__link} ${styles.header__link_notActive}` : `${styles.header__link}`;
	const classForLogo = toggleBg === true ? `${styles.header__link} ${styles.header__link_notActive}` : `${styles.header__link}`;

	return (
		<div className={styles.header}>
			<div className={styles.header__wrap}>
				<NavLink to={ROOT_PATH} className={classForLogo}>
					<div className={styles.header__logo}>
						<img src={imgLogo} alt="logo"/>
					</div>
				</NavLink>
				{(isAuth && <Logout toggleBg={toggleBg}/>) || <Navbar setModal={setModal} toggleBg={toggleBg}/>}

				<div className={classForProfile} onClick={onToggleProfile}>
					<div className={styles.header__home} id='login'>
						<img src={castle} alt="castle"/>
						<div className={styles.tooltip}>
							{
								!isAuth &&
								<div className={styles.tooltip_wrap}>
									<h4 className={styles.tooltip_title}>Sign in!</h4>
								</div>
							}
							{
								isAuth &&
								<div className={styles.tooltip_wrap}>
									<h4 className={styles.tooltip_title}>Profile</h4>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header