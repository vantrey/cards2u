import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { loginActions } from "../../../auth/login/loginReducer";



const Home = () => {

	const dispatch = useDispatch ();
	const location = useLocation ();
	let currentPath = location.pathname;

	useEffect(() => {
		dispatch(loginActions.setCurrentLocation(currentPath));
	}, [currentPath]);

	return (
		<div className={styles.home__wrap}>
			HOME
		</div>
	)
}
export default Home;