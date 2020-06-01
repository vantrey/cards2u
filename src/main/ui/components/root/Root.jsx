import React, { useEffect, useState } from 'react';
import styles from './Root.module.css'
import videomp4 from '../../video/main-bg-video-20.mp4'
import videowebm from '../../video/main-bg-video-20.mp4'
import videoogg from '../../video/main-bg-video-20.mp4'
import soundOf from '../../icons/sound-of.svg'
import soundOn from '../../icons/sound-on.svg'
import poster from '../../images/main-bg.png'


const Root = () => {
	let [ sound, setSound ] = useState (true);
	useEffect (() => {
		let vid = document.getElementById ('intro');
		console.log (vid);
		vid.volume = 0.15;
	}, []);


	return (
		<div className={styles.root}>
			<video className={styles.root__video} id='intro' controls autoPlay muted={sound}
				   poster={poster}>
				<source src={videomp4} type="video/mp4"/>
				<source src={videowebm} type="video/webm"/>
				<source src={videoogg} type="video/ogg"/>
			</video>
			{
				!sound &&
				<div className={styles.root__icon} onClick={() => setSound (!sound)}>
					<img src={soundOf} alt='soundOn'/>
				</div>
			}
			{
				sound &&
				<div className={styles.root__icon} onClick={() => setSound (!sound)}>
					<img src={soundOn} alt='soundOf'/>
				</div>
			}
			We are sorry that you cannot see the video
		</div>
	)
}
export default Root;