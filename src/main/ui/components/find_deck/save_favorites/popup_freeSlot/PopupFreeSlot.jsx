import React, { useEffect } from 'react';
import styles from './PopupFreeSlot.module.css';
import bell from "../../../../icons/bell.png";
import closeIcon from "../../../../icons/cancel.png";
import { NavLink } from "react-router-dom";
import { REDIRECT_PATH } from "../../../routes/FormRoutes";
import {
	GAME_PATH_DECK_BLUE,
	GAME_PATH_DECK_GREEN,
	GAME_PATH_DECK_PINK, GAME_PATH_DECK_PURPLE,
	GAME_PATH_DECK_RED, GAME_PATH_DECK_YELLOW
} from "../../../routes/DecksRoutes";


const PopupFreeSlot = ({saveToFavoritePopup, setSaveToFavoritePopup}) => {

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#favoritePopup') === null) ) {
			setSaveToFavoritePopup (false);
		}
	};

	const classForModal = saveToFavoritePopup === true ? `${styles.popupAuth__wrap} ${styles.popupAuth__wrap_active}` : `${styles.popupAuth__wrap}`;

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
							<h4 className={styles.header__title}>your favourite decks</h4>
							<div className={styles.header__decks}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>


									<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>


									<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>


									<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>


									<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>


									<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>

							</div>
						</div>
						<div className={styles.note__buttons_active}>
							<h6 className={styles.note__title}>Сonfirm selection</h6>
							<div className={styles.note__buttons}>
								<button className={styles.note__button}>authorization</button>
								<button className={styles.note__button}>authorization</button>
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