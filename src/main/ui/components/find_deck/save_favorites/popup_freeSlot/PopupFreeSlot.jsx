import React, {  useState } from 'react';
import styles from './PopupFreeSlot.module.css';
import bell from "../../../../icons/bell.png";
import closeIcon from "../../../../icons/cancel.png";


const PopupFreeSlot = ({saveToFavoritePopup, setSaveToFavoritePopup, setFavoriteSlotID, SaveToFavoriteDecksSID}) => {

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#favoritePopup') === null) ) {
			setSaveToFavoritePopup (false);
		}
	};

	const [ showButtonGroop, setshowButtonGroop] = useState (false);

	const onSaveFavoriteDeck = () => {
		setSaveToFavoritePopup (false);
		SaveToFavoriteDecksSID();
	}

	const onShowButtonGroop = (e) => {
		const id = e.currentTarget.id;
		setFavoriteSlotID(id);
		setshowButtonGroop(true);
	}

	const onSkipSaveFavoriteDeck = () => {
		setshowButtonGroop(false);
	}

	const classForModal = saveToFavoritePopup === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;
	const classForButtonGroop = showButtonGroop === true ? `${styles.note__buttonsGroop} ${styles.note__buttonsGroop_active}` : `${styles.note__buttonsGroop}`;

	return (
		<div className={classForModal} onClick={closeModal}>
			<div className={styles.popupAuth__content} id='favoritePopup'>
				<div className={styles.popupAuth__note}>
					<div className={styles.note__circle}>
						<img className={styles.note__icon} src={bell} alt='bell'/>
					</div>
				</div>
				<div className={styles.note__info}>
						<div className={styles.header__info}>
							<h6 className={styles.header__title}>Your favorite deck list is complete.
								Please select a deck, blah blah blah</h6>
							<div className={styles.header__decks}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`} >
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title Task title </h4>
											</div>
										</div>
									</div>
									<div className={`${styles.decks__item} ${styles.decks__item_2}`}
										 onClick={onShowButtonGroop} id='favoriteDeckSlot1'>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
									<div className={`${styles.decks__item} ${styles.decks__item_3}`}
										 onClick={onShowButtonGroop} id='favoriteDeckSlot2'>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
									<div className={`${styles.decks__item} ${styles.decks__item_4}`}
										 onClick={onShowButtonGroop} id='favoriteDeckSlot3'>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
									<div className={`${styles.decks__item} ${styles.decks__item_5}`}
										 onClick={onShowButtonGroop} id='favoriteDeckSlot4'>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
									<div className={`${styles.decks__item} ${styles.decks__item_6}`}
										 onClick={onShowButtonGroop} id='favoriteDeckSlot5'>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
							</div>
						</div>
						<div className={classForButtonGroop}>
							<h6 className={styles.note__title}>Сonfirm selection</h6>
							<div className={styles.note__buttons}>
								<button className={styles.note__button} onClick={onSaveFavoriteDeck}>i confirm</button>
								<button className={styles.note__button} onClick={onSkipSaveFavoriteDeck}>choose another</button>
							</div>
						</div>
				</div>

				<div className={styles.popupAuth__icon}>
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
			</div>
		</div>
	)
}
export default PopupFreeSlot;