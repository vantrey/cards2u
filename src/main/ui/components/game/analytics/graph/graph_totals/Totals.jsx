import React, { useEffect, useMemo, useState } from 'react';
import styles from './Totals.module.css';
import FluidMeter from "../../../../../../helpers/fluid_meter/js-fluid-meter";
import { deltaRightAnswers } from "../graph_data/Data";
import { useSelector } from "react-redux";


const Totals = () => {

	const { percentRightAnswers } = useSelector ((state) => state.favoriteDecks);
	const [ percentAnswers, setPercentAnswers ] = useState (75);

	useEffect (() => {

		let fm = new FluidMeter ();
		fm.init ({
			targetContainer: document.getElementById ("fluid-meter"),
			fillPercentage: 15,
			options: {
				fontSize: "30px",
				fontFamily: "sans-serif",
				fontFillStyle: "orange",
				drawShadow: true,
				drawText: true,
				drawPercentageSign: true,
				drawBubbles: true,
				size: 200,
				borderWidth: 10,
				backgroundColor: "#088dcd",
				foregroundColor: '#0b3b63',
				foregroundFluidLayer: {
					fillStyle: "#0b3b63",
					angularSpeed: 100,
					maxAmplitude: 12,
					frequency: 30,
					horizontalSpeed: -150
				},
				backgroundFluidLayer: {
					fillStyle: "#0f538a",
					angularSpeed: 100,
					maxAmplitude: 9,
					frequency: 30,
					horizontalSpeed: 150
				}
			}
		});
		fm.setPercentage (percentAnswers);

	}, [])

	return (
		<div className={styles.totals__wrap}>
			<h4 className={styles.totals__title}>Your test result</h4>
			<div className={styles.totals__canvas} id="fluid-meter"></div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__info}>correct answers:</div>
				 <span className={styles.totals__number}>36</span>
			</div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__info}>wrong answers:</div>
				<span className={styles.totals__number}>16</span>
			</div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__info}>missed answers:</div>
				<span className={styles.totals__number}>7</span>
			</div>
		</div>
	)
}

export default Totals;