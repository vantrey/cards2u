import React, { useEffect, useState } from 'react';
import styles from './Graph.module.css';
import graphImg from '../../../../images/graph.png';
import Settings from "../settings/Settings";
import dragonVD1 from '../../../../video/dragon-gif.gif';
import dragonFly from '../../../../audio/dragon-fly.mp3';


const Graph = ({ setCardFace, isSound }) => {

	const [ fadeIn, setFadeIn ] = useState (false);
	const [ dragon, setDragon ] = useState (false);
	const [ dragonImg, setDragonImg ] = useState ('');

	useEffect (() => {
		setTimeout (() => {
			setFadeIn (true);
		}, 6500);

		setTimeout (() => {
			setDragonImg ('');
			setDragonImg (dragonVD1);
		}, 0)

	}, [ fadeIn, dragon ]);

	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__title}>Graph</div>
			<div className={styles.graph__graph}>
				{dragon &&
				<>
					<img src={dragonImg} alt="dragon"/>
					<audio autoPlay={true} muted={!isSound}>
						<source src={dragonFly} type="audio/mpeg"/>
					</audio>
				</>
				}
				{!dragon &&
				<img src={graphImg} alt="graph"/>
				}
				<button onClick={() => {setDragon (!dragon)}} className={styles.graph__button}>dragon</button>
			</div>
			<div className={styles.graph__nav}>
				<Settings setCardFace={setCardFace}/>
			</div>
		</div>

	)
}

export default Graph;