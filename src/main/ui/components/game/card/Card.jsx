import React from 'react';
import styles from './Card.module.css';
import { useSelector } from "react-redux";


let Card = ({ cardBg, setCardFace, cardface }) => {

	const { currentFavCard, currentFavDeck } = useSelector ((state) => state.favoriteDecks);
	let stylesOnline = {
		backgroundImage: `url("${cardBg}")`,
	}

	return (
			<div className={styles.card__wrap}>
				<div className={styles.card}>
					<div className={styles.card__background} style={stylesOnline}></div>
					<div className={styles.card__content}>
						<h2 className={styles.card__title}>{currentFavDeck.deckName}</h2>
						<p className={styles.card__text}>{currentFavCard.question}</p>
						<button className={styles.card__btn} onClick={() => {setCardFace (!cardface)}}>see answer
						</button>
					</div>
				</div>


				{/*<div className={styles.card}>*/}
				{/*	<div className={styles.card__background} style={stylesOnline}></div>*/}
				{/*		<div >*/}
				{/*			<button className={styles.card__btn}>start test</button>*/}
				{/*		</div>*/}
				{/*	<div className={styles.card__modal}>*/}
				{/*		<h2 className={styles.card__title}>Pass the test in time</h2>*/}
				{/*		<p className={styles.card__text}>text</p>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
	)
}

export default Card;
