import React, { useEffect } from 'react';
import styles from './DefaultDeck.module.css';
import deckBG from '../../../images/card-bg-LBR.jpg';
import soundDeck from "../../../audio/deck.mp3";
import { loudlinks } from "../../../../helpers/loudlinks";


const DefaultDeck = ({cardPackName}) => {

	useEffect (() => {
		loudlinks ();
	}, []);

	return (
		<div className='soundHover' data-sound={soundDeck}>
			<div className={styles.deck__wrap}>
				<div className={styles.deck}>
					<div className={styles.card__imgBx}>
						<img src={deckBG} alt="images"/>
					</div>
					<div className={styles.deck__details}>
						<h2>{cardPackName}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DefaultDeck;