import React from 'react';
import styles from './Deck_red.module.css';
import deckBG from '../../../images/card-bg-RR.png'
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentFavCard } from "../../../../bll/favoriteDecks/favoriteDecksReducer";


const Deck_red = ({ setCardBg, setCardFace }) => {

	const { userFavoriteDecks } = useSelector ((state) => state.favoriteDecks);
	const dispatch = useDispatch ();

	const onChangeBG = () => {
		setCardFace(true);
		getRandomBg (maxNumber);
		setCardBg(cardBG);
		dispatch(getCurrentFavCard());
	};

	return (
		<div className={styles.deck__wrap} onClick={onChangeBG}>
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={deckBG} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h4>{userFavoriteDecks.favoriteDecks[1].deckName}</h4>
				</div>
			</div>
		</div>
	)
}
export default Deck_red;