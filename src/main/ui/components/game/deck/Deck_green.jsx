import React from 'react';
import styles from './Deck_green.module.css';
import deckBG from '../../../images/card-bg-GR.png';
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";
import { useSelector } from "react-redux";


const Deck_green = ({ setCardBg }) => {

	const { userFavoriteDecks } = useSelector ((state) => state.favoriteDecks);

	const onChangeBG = () => {
		getRandomBg (maxNumber);
		setCardBg(cardBG);
	}

	return (
		<div className={styles.deck__wrap} onClick={onChangeBG}>
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={deckBG} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h2>{userFavoriteDecks.favoriteDecks[2].deckName}</h2>
				</div>
			</div>
		</div>
	)
}
export default Deck_green;