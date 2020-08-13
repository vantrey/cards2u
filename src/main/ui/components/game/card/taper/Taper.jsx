import React, { useEffect, useState } from 'react';
import styles from './Taper.module.css';
import taper from "../../../../video/taper.gif";
import taperFake from "../../../../images/taper-fake.png";
import taperSound from "../../../../audio/taper.mp3";
import { useSelector } from "react-redux";


const Taper = ({}) => {

	const { isSound } =	useSelector ((state) => state.favoriteDecks);
	const [ taperImg, setTaperImg ] = useState (taperFake);

	useEffect (() => {
		const taperImgTimerId = setTimeout (() => {
			setTaperImg (taper);
		}, 0)
		return () => {
			setTaperImg (taperFake);
			clearTimeout(taperImgTimerId);
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