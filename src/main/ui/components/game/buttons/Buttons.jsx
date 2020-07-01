import React from 'react';
import styles from './Buttons.module.css';
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";



const Buttons = ({ setCardFace, cardface, setCardBg}) => {

	const onChangeBG = () => {
		setCardFace(true);
		getRandomBg (maxNumber);
		setCardBg(cardBG);
	}

	return (
		<div className={styles.buttons__wrap}>
			<button className={`${styles.buttons} ${styles.button__left}`}
					onClick={()=>{setCardFace(true)}}
					disabled={cardface}	>Back</button>
			<button className={`${styles.buttons} ${styles.button__center}`} >Center</button>
			<button className={`${styles.buttons} ${styles.button__right}`}
					onClick={onChangeBG}>Next</button>
		</div>
	)
}
export default Buttons;