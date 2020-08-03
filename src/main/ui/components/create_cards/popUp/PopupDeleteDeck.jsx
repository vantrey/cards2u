import React, { useEffect } from 'react';
import styles from './PopupDeleteDeck.module.css';
import bell from "../../../icons/bell.png";
import closeIcon from "../../../icons/cancel.png";
import trashDelete from "../../../audio/remove_delete.mp3";
import { useSelector } from "react-redux";


const PopupDeleteDeck = ({popupDeleteDeck, setPopupDeleteDeck, onDeleteDeck, cardPackName}) => {

	const { isSound } = useSelector ((state) => state.favoriteDecks);

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#popupAuth') === null) ) {
			setPopupDeleteDeck (false);
		}
	};

	useEffect (() => {
		const trashDeleteEl = document.getElementById ('idTrashDelete');
		const trashDeleteAudioEl = document.getElementById ('idTrashDeleteAudio');

		if ( trashDeleteEl && trashDeleteAudioEl ) {
			trashDeleteEl.addEventListener ('click', () => {
				trashDeleteAudioEl.play ();
			});
		}
	}, [])

	const classForModal = popupDeleteDeck === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;

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
					<div className={styles.note__text}>Are you sure you want to delete deck
						<span  className={styles.note__text_orange}>&nbsp;{cardPackName}&nbsp;</span>?</div>
					<div className={styles.note__buttons}>
						<div id='idTrashDelete'>
							<button className={styles.note__button} onClick={onDeleteDeck}>yes</button>
						</div>
						<button className={styles.note__button} onClick={()=> {setPopupDeleteDeck (false)}}>no</button>
					</div>
					<audio autoPlay={false} muted={!isSound} id='idTrashDeleteAudio'>
						<source src={trashDelete} type="audio/mpeg"/>
					</audio>
				</div>
				<div className={styles.popupAuth__icon}>
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
			</div>
		</div>
	)
}
export default PopupDeleteDeck;