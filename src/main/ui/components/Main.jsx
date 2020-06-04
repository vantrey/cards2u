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

const Main = () => {

	let [ toggleBg, setBg ] = useState (true);
	let [ modal, setModal ] = useState (false);

	useEffect (() => {
		let vid = document.getElementById ('intro');
		vid.addEventListener ('ended', () => {
			setBg (!toggleBg);
		}, true);

	}, []);

	return (
		<div>
			<Header setModal={setModal}/>
				<div className={styles.main__wrap}>
					{
						toggleBg &&
						<Intro/>
					}
					{
						!toggleBg &&
						<>
							<Root/>
							<Loader/>
						</>
					}

					<Scroll modal={modal} setModal={setModal}/>
					<Menu/>
				</div>

			{/*<Test/>*/}
			{/*<Routs/>*/}
		</div>
	)
}
export default Main