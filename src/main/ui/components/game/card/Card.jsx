import React from 'react';
import styles from './Card.module.css';
import {setCardGrade} from "../../../../features/Cards/bll/cardsReducer"


let Card = ({ cardBg, setCardFace, cardface }) => {

	let stylesOnline = {
		backgroundImage: `url("${cardBg}")`,
	}

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
				<div className={styles.card__background} style={stylesOnline}> </div>
				<div className={styles.card__content}>
					<h2 className={styles.card__title}>React Native</h2>
					<p className={styles.card__text}>Что то русскими буквами Что то русскими буквами Что то русскими буквамиCheck out all of these gorgeous mountain trips with beautiful
						views of, you guessed it, the mountains</p>
					<button className={styles.card__btn} onClick={() => {setCardFace (!cardface)}}>see answer</button>
				</div>
			</div>
		</div>

	)
}

export default Card;

/*
const onSetGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
	const newGrade = getGrade(card.grade, Number(e.currentTarget.name), card.shots)
	dispatch(setCardGrade({_id: card._id, grade: newGrade, shots: card.shots + 1}))
	setIsGraded(true)
}*/
