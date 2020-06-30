import React, { useEffect, useState } from 'react';
import styles from './Root.module.css'
import videomp4 from '../../video/main-bg-video-20.mp4'
import videowebm from '../../video/main-bg-video-20.webm'
import soundOf from '../../icons/sound-of.svg'
import soundOn from '../../icons/sound-on.svg'
import poster from '../../images/main-bg.webp'


const Root = () => {

	let [ sound, setSound ] = useState (true);
	let [ iconFlash, setIconlash ] = useState (false);

	useEffect (() => {
		let vid = document.getElementById ('root');
		vid.volume = 0.4;
		vid.addEventListener ('playing', () => {
			setIconlash (true);
			let IDtime= setTimeout (() => {
				setIconlash (false);
			}, 3000);
		}, true);

		return () => {
			vid.removeEventListener ('playing', () => {
				setIconlash (true);
				setTimeout (() => {
					setIconlash (false);
				}, 3000);
			}, true);
		}

	}, []);

	const classIcon = iconFlash === true ? `${styles.root__icon_flash}` : `${styles.root__icon}`;

	return (
		<div className={styles.root}>
			<video className={styles.root__video} id='root' autoPlay loop muted={sound}
				   poster={poster}>
				<source src={videomp4} type="video/mp4"/>
				<source src={videowebm} type="video/webm"/>
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
			<p>Your browser doesn't support HTML5 video.</p>
			<p>We are sorry that you cannot see the video.</p>
		</div>
	)
}
export default Root;