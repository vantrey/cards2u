import React, { useEffect } from 'react';
import styles from './Buttons.module.css';
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";
import soundCard from "../../../audio/card.mp3";
import { getCurrentFavCard } from "../../../../bll/favoriteDecks/favoriteDecksReducer";
import { useDispatch} from "react-redux";


const Buttons = ({ setCardFace, cardface, setCardBg, isSound}) => {

	const dispatch = useDispatch();

	useEffect( () => {
		const nextCardEl = document.getElementById('nextCard');
		const nextCardIdEl = document.getElementById ('nextCardId');

		if(nextCardEl && nextCardIdEl) {
			nextCardIdEl.addEventListener('click', () => {
				nextCardEl.play();
				setCardFace(true);
				getRandomBg (maxNumber);
				setCardBg(cardBG);
				dispatch(getCurrentFavCard());
			});
		}

	},[setCardFace])

	return (
		<div className={styles.buttons__wrap}>
			<button className={`${styles.buttons} ${styles.button__left}`}
					onClick={()=>{setCardFace(true)}}
					disabled={cardface}	>Back</button>
			<button className={`${styles.buttons} ${styles.button__right}`}
					id='nextCardId'>Next</button>
			<audio autoPlay={false} muted={!isSound} id='nextCard'>
				<source src={soundCard} type="audio/mpeg"/>
			</audio>
		</div>
	)
}
export default Buttons;