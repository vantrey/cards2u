import React, { useEffect } from 'react';
import styles from './Deck_blue2.module.css';
import deckBG from '../../../images/card-bg-LR.png';
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions, getCurrentFavCard } from "../../../../bll/favoriteDecks/favoriteDecksReducer";


const Deck_blue2 = ({ setCardBg, setCardFace }) => {

	const { userFavoriteDecks, taperReset } = useSelector ((state) => state.favoriteDecks);
	const dispatch = useDispatch ();

	const onChangeBG = () => {
		setCardFace (true);
		getRandomBg (maxNumber);
		setCardBg (cardBG);
		dispatch (getCurrentFavCard ());

		if ( taperReset ) {
			dispatch (favoriteDecksActions.setTaperReset (false));
		}
		setTimeout( () => {
			dispatch (favoriteDecksActions.setTaperReset (true));
		}, 0)
	}

	return (
		<div className={styles.deck__wrap} onClick={onChangeBG}>
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={deckBG} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h4>{userFavoriteDecks.favoriteDecks[5].deckName}</h4>
				</div>
			</div>
		</div>
	)
}
export default Deck_blue2;