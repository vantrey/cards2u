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
		<>
			<Header  toggleBg={toggleBg}/>
				<>
					{
						toggleBg &&
						<Intro setBg={setBg}/>
					}
					{
						!toggleBg &&
						<MainRoutes/>
					}
				</>
			<FormRoutes/>
			<Menu/>
		</>
	)
}
export default Main