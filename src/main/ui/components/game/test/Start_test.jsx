import React from 'react';
import styles from './StartTest.module.css';
import bg_1 from './../../../images/card-bg/card-bg-1.jpg';
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";
import { getCurrentFavCard } from "../../../../bll/favoriteDecks/favoriteDecksReducer";
import { useDispatch } from "react-redux";


const StartTest = ({ setCardFace, setCardBg }) => {

	const dispatch = useDispatch ();
	let stylesOnline = {
		backgroundImage: `url("${bg_1}")`,
	}

	const onStartTest = () => {
		setCardFace (true);
		getRandomBg (maxNumber);
		setCardBg (cardBG);
		dispatch (getCurrentFavCard ());
	}

	return (
		<div className={styles.test__wrap}>
			<div className={styles.card__wrap}>
				<div className={styles.card}>
					<div className={styles.card__background} style={stylesOnline}></div>
					<div className={styles.card__content}>
						<h2 className={styles.card__title}>Srart</h2>
						<p className={styles.card__text}>text</p>
					</div>
				</div>
			</div>
			<div className={styles.test__buttons}>
				<div className={styles.buttons__wrap}>
					<button className={`${styles.buttons} ${styles.button__center}`}
							onClick={onStartTest}> Start
					</button>
				</div>
			</div>
		</div>
	)
}
export default StartTest;