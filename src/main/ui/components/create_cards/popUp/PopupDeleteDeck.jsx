import React, { useEffect } from 'react';
import styles from './PopupDeleteDeck.module.css';
import bell from "../../../icons/bell.png";
import closeIcon from "../../../icons/cancel.png";
import { loudlinks } from "../../../../helpers/loudlinks";
import trashDelete from "../../../audio/trash-delete.mp3";


const PopupDeleteDeck = ({popupDeleteDeck, setPopupDeleteDeck, onDeleteDeck}) => {

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#popupAuth') === null) ) {
			setPopupDeleteDeck (false);
		}
	};

	useEffect (() => {
		loudlinks ();
	}, []);

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
					<div className={styles.note__text}>Are you sure you want to delete the deck?</div>
					<div className={styles.note__buttons}>
						<div className='soundClick' data-sound={trashDelete}>
							<button className={styles.note__button} onClick={onDeleteDeck}>yes</button>
						</div>
						<button className={styles.note__button} onClick={()=> {setPopupDeleteDeck (false)}}>no</button>
					</div>
				</div>
				<div className={styles.popupAuth__icon}>
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
			</div>
		</div>
	)
}
export default PopupDeleteDeck;