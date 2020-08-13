import React, { useEffect, useState } from 'react';
import styles from './Graph.module.css';
import Settings from "../settings/Settings";
import Data from "./graph_data/Data";
import Totals from "./graph_totals/Totals";
import Dragon from "./graph_dragon/Dracon";
import Fireworks from "./graph_fierworks/Fireworks";
import InfoBanner from "./graph_info/InfoBanner";
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions } from "../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Graph = ({ setCardFace }) => {

	const [ fadeIn, setFadeIn ] = useState (false);
	const { bannerForGraph } = useSelector ((state) => state.favoriteDecks);

	useEffect (() => {

		setTimeout (() => {
			setFadeIn (true);
		}, 6500);

	}, [ fadeIn, bannerForGraph ]);

	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__title}></div>
			<div className={styles.graph__graph}>
				{(bannerForGraph === 'infoBanner') && <InfoBanner/>}
				{(bannerForGraph === 'dataBanner') && <Data/>}
				{(bannerForGraph === 'totalsBanner') && <Totals/>}
				{(bannerForGraph === 'dragonBanner') && <Dragon/>}
				{(bannerForGraph === 'fireworksBanner') && <Fireworks/>}

			{/*<InfoBanner/>*/}
			{/*<Data/>*/}
			{/*<Totals/>*/}
			{/*<Dragon/>*/}
			{/*<Fireworks/>*/}

			</div>
			<div className={styles.graph__nav}>
				<Settings setCardFace={setCardFace}/>
			</div>
		</div>

	)
}

export default Graph;