import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Menu from './menu/Menu';
import Intro from "./intro/Intro";
import FormRoutes from "./routes/FormRoutes";
import MainRoutes from "./routes/MainRoutes";



const Main = () => {

	let [ toggleBg, setBg ] = useState (true);

	useEffect (() => {
		let vid = document.getElementById ('intro');
		vid.addEventListener ('ended', () => {
			setBg (!toggleBg);
		}, true);

	}, []);

	return (
		<div>
			<Header setBg={setBg} toggleBg={toggleBg}/>
				<div className={styles.main__wrap}>
					{
						toggleBg &&
						<Intro setBg={setBg}/>
					}
					{
						!toggleBg &&
						<MainRoutes/>
					}
				</div>
			<FormRoutes/>
			<Menu/>
		</div>
	)
}
export default Main