import React, { useEffect, useState } from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.webp';
import closeIcon from '../../icons/cancel.png';
import Loader from "../loader/Loader";
import { useHistory } from "react-router";
import poster from "../../images/main-bg.webp";
import videomp4 from "../../video/main-bg-video-20.mp4";
import videowebm from "../../video/main-bg-video-20.webm";


const Scroll = ({ title, children, isFetching }) => {

	let [ modal, setModal ] = useState (false);

	useEffect (() => {
		let timerId = setTimeout (() => {
			setModal (true);
		}, 300)

		return () => {
			clearTimeout (timerId)
		}

	}, []);

	let history = useHistory ();

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#skrollContent') === null) ) {
			setModal (false);
			history.push ('/');
		}
	};

	const classForModal = modal === true ? `${styles.scroll__wrap} ${styles.scroll__wrap_active}` : `${styles.scroll__wrap}`;

	return (
		<div className={styles.scroll__bg}>
			<video className={styles.scroll__video}  autoPlay loop muted={true}
				   poster={poster}>
				<source src={videomp4} type="video/mp4"/>
				<source src={videowebm} type="video/webm"/>
			</video>
			<div className={classForModal} onClick={closeModal}>
				<div className={styles.scroll__img} id='skrollContent'>
					<h2 className={styles.scroll__title}>{title}</h2>
					{children}
					<div className={styles.scroll__icon}>
						<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
					</div>
					<img src={scrollBg} alt="scroll"/>
					<div className={styles.scroll__loader}>
						{isFetching && <Loader/>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scroll;