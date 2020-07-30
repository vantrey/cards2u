import React from 'react';
import styles from './Settings.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setGameType } from "../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Settings = ({ setNumberResponses }) => {

	const dispatch = useDispatch ();
	const { gameType } = useSelector ((state) => state.favoriteDecks);

	console.log (gameType)

	const findRadio = () => {
		let rad = document.getElementsByName ('numberResponses');
		for ( let i = 0; i < rad.length; i++ ) {
			if ( rad[i].checked ) {
				setNumberResponses (rad[i].value)
			}
		}
	};

	const onSelectGameType = (e) => {
		if ( e.target.checked ) {
			// dispatch(setGameType("controlledRandom"));
			console.log ('checked')
		} else {
			// dispatch(setGameType("inOrder"));
			console.log ('not-checked')
		}
	};

	const onPassTest = (e) => {
		if ( e.target.checked ) {
			// dispatch(setGameType("test"));
			console.log ('test-1')
		} else {
			console.log ('test-0')
		}
	};

	const onSound = (e) => {
		if ( e.target.checked ) {
			// dispatch(setGameType("test"));
			console.log ('test-1')
		} else {
			console.log ('test-0')
		}
	};

	return (
		<div className={styles.switcher__wrap}>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Number of responses</h6>
				<div className={styles.radio__wrap}>
					<div className={styles.radio}>
						<label className={styles.radio__custom}>
							<input className={styles.radio__input} type="radio" name="numberResponses"
								   onClick={findRadio} value="one" defaultChecked/>
							<span className={styles.radio__titlte}>one</span>
						</label>
					</div>
					<div className={styles.radio}>
						<label className={styles.radio__custom}>
							<input className={styles.radio__input} type="radio" name="numberResponses"
								   onClick={findRadio} value="few"/>
							<span className={styles.radio__titlte}>few</span>
						</label>
					</div>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Game type</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-1"
						   onChange={onSelectGameType} defaultChecked={false}/>
					<label className={styles.switcher__label} htmlFor="switcher-1"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Pass a test</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-2"
						   onChange={onPassTest}/>
					<label className={styles.switcher__label} htmlFor="switcher-2"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Sound</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-3"
						   onChange={onSound} defaultChecked/>
					<label className={styles.switcher__label} htmlFor="switcher-3"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings;