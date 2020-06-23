import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Root from './root/Root';
import Menu from './menu/Menu';
import Intro from "./intro/Intro";
import Loader from "../common/loader/Loader";
import FormRoutes from "./routes/FormRoutes";
import MainRoutes from "./routes/MainRoutes";
import Profile from "./profile/Profile";
import Game from "./game/Game";


const Main = () => {

	let [ toggleBg, setBg ] = useState (true);
	// let {skipIntro} = useParams();
	//
	// useEffect (() => {
	// 	let vid = document.getElementById ('intro');
	// 	vid.addEventListener ('ended', () => {
	// 		setBg (!toggleBg);
	// 	}, true);
	//
	// }, []);

	return (
		<div>
			<Header setBg={setBg} toggleBg={toggleBg}/>
				{/*<div className={styles.main__wrap}>*/}
				{/*	{*/}
				{/*		toggleBg &&*/}
				{/*		<Intro setBg={setBg}/>*/}
				{/*	}*/}
				{/*	{*/}
				{/*		!toggleBg &&*/}
				{/*		<Root/>*/}
				{/*	}*/}
				{/*</div>*/}
			<Game />
			<MainRoutes/>
			<FormRoutes/>
			<Menu/>
			{/*<Header/>*/}
			{/*<Test/>*/}
			{/*<Routs/>*/}
		</div>
	)
}
export default Main