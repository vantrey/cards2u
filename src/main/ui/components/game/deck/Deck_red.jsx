import React from 'react';
import styles from './Deck_red.module.css';
import deckBG from '../../../images/card-bg-RR.png'
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";


const Deck_red = ({ setCardBg }) => {

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
					<h2> Famous</h2>
				</div>
			</div>
		</div>
	)
}
export default Deck_red;