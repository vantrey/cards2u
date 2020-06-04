import React, { useEffect, useState } from 'react';
import styles from './Intro.module.css'
import soundOf from '../../icons/sound-of.svg'
import soundOn from '../../icons/sound-on.svg'
import intro from '../../video/Intro-53-commpres.mp4'
import intro_webm from '../../video/Intro-53-commpres-webm.webm'
import poster from '../../images/main-bg.png'


const Intro = () => {

	let [ sound, setSound ] = useState (true);
	let [ iconFlash, setIconlash ] = useState (false);

	useEffect (() => {
		let vid = document.getElementById ('intro');
		vid.volume = 0.25;
		vid.addEventListener ('playing', () => {
			setIconlash(true);
			setTimeout( () => {
				setIconlash(false);
			}, 3000);
		}, true);

	}, []);

	const classIcon = iconFlash === true ? `${styles.intro__icon_flash}` : `${styles.intro__icon}`;

	return (
		<div className={styles.intro}>
			<video className={styles.intro__video} id='intro' controls autoPlay muted={sound}
				   poster={poster}>
				<source src={intro} type="video/mp4"/>
				<source src={intro_webm} type="video/webm"/>
			</video>
			{
				!sound &&
				<div className={classIcon} onClick={() => setSound (!sound)}>
					<img src={soundOf} alt='soundOn'/>
				</div>
			}
			{
				sound &&
				<div className={classIcon} onClick={() => setSound (!sound)}>
					<img src={soundOn} alt='soundOf'/>
				</div>
			}
			We are sorry that you cannot see the intro
		</div>
	)
}
export default Intro;