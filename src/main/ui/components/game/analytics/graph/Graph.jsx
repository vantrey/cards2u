import React, { useEffect, useState } from 'react';
import styles  from './Graph.module.css';
import graphImg  from '../../../../images/graph.png';


const Graph = () => {


	const [ fadeIn, setFadeIn] = useState (false);

	useEffect (() => {
		setTimeout (() => {
			setFadeIn (true);
		}, 6500);

	}, [fadeIn]);

	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__title}>Graph</div>
			<div className={styles.graph__graph}>
				<img src={graphImg} alt="graph"/>
			</div>
			<div className={styles.graph__nav}>Graph</div>
		</div>

	)
}

export default Graph;