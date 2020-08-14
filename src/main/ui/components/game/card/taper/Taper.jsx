import React, { useEffect, useState } from 'react';
import styles from './Taper.module.css';
import taper from "../../../../video/taper.gif";
import taperFake from "../../../../images/taper-fake.png";
import taperSound from "../../../../audio/taper.mp3";
import { useDispatch, useSelector } from "react-redux";
import { cardBG, getRandomBg, maxNumber } from "../../../../common/random_bg/Random_bg";
import { favoriteDecksActions, getCurrentFavCard } from "../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Taper = ({setCardFace, setCardBg}) => {

	const { isSound } =	useSelector ((state) => state.favoriteDecks);
	const [ taperImg, setTaperImg ] = useState (taperFake);
	const dispatch = useDispatch();

	useEffect (() => {
		const taperImgTimerId = setTimeout (() => {
			setTaperImg (taper);
		}, 0);

		const finishTimerId = setTimeout (() => {
			setCardFace(true);
			getRandomBg (maxNumber);
			setCardBg(cardBG);
			dispatch(getCurrentFavCard());
			dispatch(favoriteDecksActions.setTaperReset(false));
			dispatch(favoriteDecksActions.setTaperReset(true));
		}, 20000);

		return () => {
			setTaperImg (taperFake);
			clearTimeout(taperImgTimerId);
			clearTimeout(finishTimerId);
		}
	}, []);

	return (
		<>
			<div className={styles.main__card_fire}>
				<img src={taperImg} alt="taper"/>
			</div>
			<audio autoPlay={true} muted={!isSound}>
				<source src={taperSound} type="audio/mpeg"/>
			</audio>
		</>
	)
}
export default Taper;