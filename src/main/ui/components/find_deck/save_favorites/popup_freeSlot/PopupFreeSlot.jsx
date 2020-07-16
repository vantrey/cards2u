import React, { useState } from 'react';
import styles from './PopupFreeSlot.module.css';
import bell from "../../../../icons/bell.png";
import closeIcon from "../../../../icons/cancel.png";
import { useSelector } from "react-redux";


const PopupFreeSlot = ({ saveToFavoritePopup, setSaveToFavoritePopup, setFavoriteSlotID, SaveToFavoriteDecksSID }) => {

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#favoritePopup') === null) ) {
			setSaveToFavoritePopup (false);
			uncheckAllRadio();
			setshowButtonGroop (false);
		}
	};

	const [ showButtonGroop, setshowButtonGroop ] = useState (false);

	const onSaveFavoriteDeck = () => {
		setSaveToFavoritePopup (false);
		SaveToFavoriteDecksSID ();
		uncheckAllRadio();
		setshowButtonGroop (false);
	}

	const onShowButtonGroop = (e) => {
		const id = e.currentTarget.id;
		setFavoriteSlotID (id);
		setshowButtonGroop (true);
	}

	const onSkipSaveFavoriteDeck = () => {
		setshowButtonGroop (false);
		uncheckAllRadio();
	}

	const classForModal = saveToFavoritePopup === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;
	const classForButtonGroop = showButtonGroop === true ? `${styles.note__buttonsGroop} ${styles.note__buttonsGroop_active}` : `${styles.note__buttonsGroop}`;
	const { userFavoriteDecks } = useSelector ((state) => state.favoriteDecks);
	const uncheckAllRadio = () => {
		let radioElement = document.getElementsByName('gender');
		for(let i=0; i < radioElement.length; i++ ) {
			radioElement[i].checked = false;
		}
	}

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
							Please, choose a deck to replace.</h6>
						<div className={styles.header__decks}>
							<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
								<div className={styles.tooltip}>
									<div className={styles.tooltip_wrap}>
										<h4 className={styles.tooltip_title}>React Native</h4>
									</div>
								</div>
							</div>
							<input type="radio" id="male" name="gender" value="male" className={styles.decks__radio}/>
							<label htmlFor="male" className={styles.decks__label}>
								<div className={`${styles.decks__item} ${styles.decks__item_2}`}
									 onClick={onShowButtonGroop} id='favoriteDeckSlot1'>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[0].deckName}</h4>
										</div>
									</div>
								</div>
							</label>
							<input type="radio" id="male1" name="gender" value="male" className={styles.decks__radio}/>
							<label htmlFor="male1" className={styles.decks__label}>
								<div className={`${styles.decks__item} ${styles.decks__item_3}`}
									 onClick={onShowButtonGroop} id='favoriteDeckSlot2'>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[1].deckName}</h4>
										</div>
									</div>
								</div>
							</label>
							<input type="radio" id="male2" name="gender" value="male" className={styles.decks__radio}/>
							<label htmlFor="male2" className={styles.decks__label}>
								<div className={`${styles.decks__item} ${styles.decks__item_4}`}
									 onClick={onShowButtonGroop} id='favoriteDeckSlot3'>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[2].deckName}</h4>
										</div>
									</div>
								</div>
							</label>
							<input type="radio" id="male3" name="gender" value="male" className={styles.decks__radio}/>
							<label htmlFor="male3" className={styles.decks__label}>
								<div className={`${styles.decks__item} ${styles.decks__item_5}`}
									 onClick={onShowButtonGroop} id='favoriteDeckSlot4'>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[3].deckName}</h4>
										</div>
									</div>
								</div>
							</label>
							<input type="radio" id="male4" name="gender" value="male" className={styles.decks__radio}/>
							<label htmlFor="male4" className={styles.decks__label}>
								<div className={`${styles.decks__item} ${styles.decks__item_6}`}
									 onClick={onShowButtonGroop} id='favoriteDeckSlot5'>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[4].deckName}</h4>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className={classForButtonGroop}>
						<h6 className={styles.note__title}>Сonfirm selection</h6>
						<div className={styles.note__buttons}>
							<button className={styles.note__button} onClick={onSaveFavoriteDeck}>i confirm</button>
							<button className={styles.note__button} onClick={onSkipSaveFavoriteDeck}>choose another
							</button>
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