import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Root from './root/Root';
import Menu from './menu/Menu';
import Intro from "./intro/Intro";
import Scroll from "../common/scroll/Scroll";
import Loader from "../common/loader/Loader";
import Test from "../../features/test/Test";
import Routs from "./routes/Routes";
import Form1 from "../common/form/Form1";

const Main = () => {

	// let [ toggleBg, setBg ] = useState (true);
	// let [ modal, setModal ] = useState (false);
	// let [ loader, setLoader ] = useState (true);
	// let [ children, setChildren ] = useState (Form1);

	// useEffect (() => {
	// 	let vid = document.getElementById ('intro');
		// vid.addEventListener ('canplaythrough', () => {
		// 	setLoader (false);
		// }, true);

	// 	vid.addEventListener ('ended', () => {
	// 		setBg (!toggleBg);
	// 	}, true);
	//
	// }, []);

	return (
		<div>
			{/*<Header setModal={setModal} setBg={setBg} toggleBg={toggleBg} setChildren={setChildren}/>*/}
				{/*<div className={styles.main__wrap}>*/}
				{/*	/!*{*!/*/}
				{/*	/!*	loader &&*!/*/}
				{/*	/!*	<Loader/>*!/*/}
				{/*	/!*}*!/*/}

				{/*	{*/}
				{/*		toggleBg &&*/}
				{/*		<Intro setBg={setBg}/>*/}
				{/*	}*/}
				{/*	{*/}
				{/*		!toggleBg &&*/}
				{/*		<>*/}
				{/*			<Root/>*/}
				{/*			<Loader/>*/}
				{/*		</>*/}
				{/*	}*/}

				{/*	<Scroll modal={modal} setModal={setModal} children={children}/>*/}
				{/*	<Menu/>*/}
				{/*</div>*/}

			<Header/>
			<Test/>
			<Routs/>
		</div>
	)
}
export default Main