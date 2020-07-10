import React from 'react';
import styles from './DecksQuestions.module.css';
import EmptyDeck from "../emptyDeck/EmptyDeck";
import PopupNoteOk from "../../save_favorites/popup_notification/popupNoteOk";


const DecksQuestions = ({cards, cardPackName, SaveToFavoriteDecks, popupSaveToDeckOk, setPopupSaveToDeckOk}) => {

	return (
		<div className={styles.container__rightBlock}>
			<div className={styles.deckInfo__wrap}>
				<h5 className={styles.deckInfo__title}>Selected deck: &nbsp;
					<small className={styles.title__desc}>{cardPackName}</small></h5>
				<div className={styles.deckInfo__data}>
					<div className={styles.data__title}>
						<div className={styles.title__question}>Question</div>
						<div className={styles.data__border}></div>
						<div className={styles.title__answer}>Answer</div>
					</div>
					<div className={styles.data__item_box}>
                        {cards.length === 0 ?  <EmptyDeck/>  :

                        (cards.map (cards =>
								<div className={styles.data__item} key={cards._id}>
									<div className={styles.item__question}>{cards.question}</div>
									<div className={styles.data__border}></div>
									<div className={styles.item__answer}>{cards.answer}</div>
								</div>
                            ) )
						}
					</div>
					<div className={styles.deckInfo__button_wrap} onClick={SaveToFavoriteDecks}>
						<button className={styles.deckInfo__button}>save to favorites</button>
					</div>
					<PopupNoteOk popupSaveToDeckOk={popupSaveToDeckOk} setPopupSaveToDeckOk={setPopupSaveToDeckOk}/>
				</div>
			</div>
		</div>
	)
}

export default DecksQuestions;




