import React from 'react';
import styles from './Deck_blue.module.css';
import img1 from '../../../images/shirt 1.png'
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";



const Deck_blue = () => {

	const onChangeBG = () => {
		getRandomBg (maxNumber);
		console.log (cardBG)
	}

	return (
		<div className={styles.deck__wrap} onClick={onChangeBG}>
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={img1} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h2> Blablabla </h2>
				</div>
			</div>
		</div>
	)
}
export default Deck_blue;