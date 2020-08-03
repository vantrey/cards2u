import React, { useEffect } from 'react';
import styles from './PopupNote.module.css';
import bell from "../../../../icons/bell.png";
import soundForNoteOk from "../../../../audio/added.mp3";
import closeIcon from "../../../../icons/cancel.png";
import { useSelector } from "react-redux";


const PopupNoteOk = ({popupSaveToDeckOk, setPopupSaveToDeckOk}) => {

	const { isSound } = useSelector ((state) => state.favoriteDecks);

	// const trashDeleteAudioEl = document.getElementById ('idForAudioNoteOk');
	//
	// if ( trashDeleteAudioEl ) {
	// 	trashDeleteAudioEl.play ();
	// }

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#popupAuth') === null) ) {
			setPopupSaveToDeckOk (false);
		}
	};

	useEffect (() => {

		let timerId = setTimeout (() => {
			const trashDeleteAudioEl = document.getElementById ('idForAudioNoteOk');

			if ( trashDeleteAudioEl ) {
					trashDeleteAudioEl.play ();
			}
		}, 0)

		let timerId1 = setTimeout (() => {
			setPopupSaveToDeckOk (false);
		}, 3000)

		return () => {
			clearTimeout (timerId);
			clearTimeout (timerId1);
		}
	}, [popupSaveToDeckOk]);


	const classForModal = popupSaveToDeckOk === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;

	return (
		<div className={classForModal} onClick={closeModal}>
			<div className={styles.popupAuth__content} id='popupAuth'>
				<div className={styles.popupAuth__note}>
					<div className={styles.note__circle}>
						<img className={styles.note__icon} src={bell} alt='bell'/>
					</div>
				</div>
				<div className={styles.note__info}>
					<h5 className={styles.note__title}>Welcome to Wisemen&nbsp;!</h5>
						<div className={styles.note__text}>Deck successfully added to favorites</div>
				</div>
				<div className={styles.popupAuth__icon}>
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
			</div>
			<audio autoPlay={false} muted={!isSound} id='idForAudioNoteOk'>
				<source src={soundForNoteOk} type="audio/mpeg"/>
			</audio>
		</div>
	)
}
export default PopupNoteOk;