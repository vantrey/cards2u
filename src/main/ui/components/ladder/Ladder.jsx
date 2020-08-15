import React, { useEffect } from 'react';
import styles from './Ladder.module.css';
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { loginActions } from "../../../auth/login/loginReducer";


const Ladder = () => {

	const dispatch = useDispatch ();
	const location = useLocation ();
	let currentPath = location.pathname;

	useEffect (() => {
		dispatch (loginActions.setCurrentLocation (currentPath));
	}, [ currentPath ]);

	return (
		<div className={styles.ladder__wrap}>
			<div className={styles.ladder__left}></div>
			<div className={styles.ladder__container}></div>
			<div className={styles.ladder__right}></div>
		</div>
	)
}
export default Ladder;