import React, { useEffect, useState } from 'react';
import styles from './Fireworks.module.css';
import fireworks from '../../../../../video/fireworks.gif';
import fireworksSound from '../../../../../audio/fireworks.mp3';
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions } from "../../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Fireworks = () => {

	const { isSound, bannerForGraph } = useSelector ((state) => state.favoriteDecks);
	const [ fadeIn, setFadeIn ] = useState (false);
	const [ fireworksImg, setFireworksImg ] = useState ('');
	const dispatch = useDispatch ();

	useEffect (() => {

		const fireworksId = setTimeout (() => {
			setFadeIn (true);
		}, 14000);

		const fireworksId1 = setTimeout (() => {
			dispatch (favoriteDecksActions.setBanner ('totalsBanner'));
		}, 15000);

		const fireworksId2 = setTimeout (() => {
			setFireworksImg ('');
			setFireworksImg (fireworks)
		}, 0);

		return () => {

			clearTimeout (fireworksId);
			clearTimeout (fireworksId1);
			clearTimeout (fireworksId2);
		}

	}, [ fadeIn, bannerForGraph ]);


	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__graph}>
				<div className={styles.fireworks__text}>
					<div className={styles.fireworks__discr_big}>Congratulations !</div>
					<div className={styles.fireworks__discr}>You passed the test.</div>
				</div>
				<img src={fireworksImg} alt="fireworks"/>
				<audio autoPlay={true} muted={!isSound}>
					<source src={fireworksSound} type="audio/mpeg"/>
				</audio>

			</div>
		</div>
	)
}

export default Fireworks;