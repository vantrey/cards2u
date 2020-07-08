import React, { useEffect, useState } from 'react';
import styles from './PopupAuth.module.css';
import { useHistory } from "react-router";
import scrollBg from '../../../images/scroll.webp';
import closeIcon from '../../../icons/cancel.png';

const PopupAuth = ({setpopupAuth, setModal, modal}) => {

	let history = useHistory ();

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#popupAuth') === null) ) {
			setpopupAuth(false);
			setModal (false);
			history.push ('/decks');
		}
	};

	const classForModal = modal === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;


	return (
		<div className={styles.popupAuth__bg}>
			<div className={classForModal} onClick={closeModal}>
				<div className={styles.popupAuth__img} id='popupAuth'>
					<h2 className={styles.popupAuth__title}>title</h2>
					<div className={styles.popupAuth__icon}>
						<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
					</div>
					<img src={scrollBg} alt="scroll"/>
				</div>
			</div>
		</div>
	)
}

export default PopupAuth;