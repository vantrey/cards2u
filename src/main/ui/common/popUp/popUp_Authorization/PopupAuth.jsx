import React, { useEffect } from 'react';
import styles from './PopupAuth.module.css';
import bell from '../../../icons/bell.png';
import { useHistory } from "react-router";
import closeIcon from '../../../icons/cancel.png';
import { NavLink } from "react-router-dom";
import { REDIRECT_PATH } from "../../../components/routes/FormRoutes";

const PopupAuth = ({setPopupAuth, setModal, modal}) => {

	useEffect (() => {
		let timerId = setTimeout (() => {
			setModal (true);
		}, 400)
		return () => {
			clearTimeout (timerId)
		}
	}, []);

	let history = useHistory ();

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#popupAuth') === null) ) {
			setPopupAuth(false);
			setModal (false);
			history.push ('/decks');
		}
	};

	const classForModal = modal === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;

	return (
		<div className={styles.popupAuth__bg}>
			<div className={classForModal} onClick={closeModal}>
				<div className={styles.popupAuth__content} id='popupAuth'>
					<div className={styles.popupAuth__note}>
						<div className={styles.note__circle}>
							<img className={styles.note__icon} src={bell} alt='bell'/>
						</div>
					</div>
					<div className={styles.note__info}>
						<h5 className={styles.note__title}>Welcome to Wisemen&nbsp;!</h5>
						<div>
						<div className={styles.note__text}>Here you must be logged in. </div>
						<div className={styles.note__text}>Do you want to log in now?</div>
						</div>
						<div className={styles.note__buttons}>
							<NavLink to={REDIRECT_PATH}>
								<button className={styles.note__button}>authorization</button>
							</NavLink>
						</div>
					</div>
					<div className={styles.popupAuth__icon}>
						<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopupAuth;