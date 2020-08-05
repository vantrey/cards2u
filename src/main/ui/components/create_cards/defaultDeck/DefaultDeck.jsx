import React, {useEffect} from 'react';
import styles from './DefaultDeck.module.css';
import deckBG from '../../../images/card-bg-LBR.jpg';
import soundDeck from "../../../audio/deck.mp3";
import {useSelector} from "react-redux";


const DefaultDeck = ({cardPackName, isSuccess}) => {

	const {isSound} = useSelector((state) => state.favoriteDecks);

	useEffect (() => {

		const onSoundHoverDefaultDeckEl = document.getElementById ('onSoundHoverDefaultDeck');
		const soundHoverDefaultDeckEl = document.getElementById ('soundHoverDefaultDeck');

		if(onSoundHoverDefaultDeckEl && soundHoverDefaultDeckEl) {
			onSoundHoverDefaultDeckEl.addEventListener('mouseenter', () => {
				soundHoverDefaultDeckEl.play();
			});

			onSoundHoverDefaultDeckEl.addEventListener('mouseleave', () => {
				soundHoverDefaultDeckEl.pause();
				soundHoverDefaultDeckEl.currentTime = 0;
			});

			onSoundHoverDefaultDeckEl.addEventListener('touchmove', () => {
				soundHoverDefaultDeckEl.pause();
				soundHoverDefaultDeckEl.currentTime = 0;
			});

		}

	}, []);

	return (
		<div id='onSoundHoverDefaultDeck'>
			<div className={styles.deck__wrap}>
				<div className={styles.deck}>
					<div className={styles.card__imgBx}>
						<img src={deckBG} alt="images"/>
					</div>
					<div className={styles.deck__details}>
						{isSuccess &&
						<h2>{cardPackName}</h2>}
					</div>
				</div>
			</div>
			<audio autoPlay={false} muted={!isSound} id='soundHoverDefaultDeck'>
				<source src={soundDeck} type="audio/mpeg"/>
			</audio>
		</div>
	)
}
export default DefaultDeck;