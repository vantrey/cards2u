import React, { useEffect, useState } from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.webp';
import closeIcon from '../../icons/cancel.png';
import Loader from "../loader/Loader";
import { useHistory } from "react-router";


const Scroll = ({ title, children, isFetching }) => {

	let [ modal, setModal ] = useState (false);

	useEffect (() => {
		setTimeout (() => {
			setModal (true);
		}, 300)

	}, []);

	let history = useHistory();

	const closeModal = (e) => {
		if ( e.target.matches ('#closeIconId') || (e.target.closest ('#skrollContent') === null) ) {
			setModal (false);
			history.push('/');
		}
	};

	const classForModal = modal === true ? `${styles.scroll__wrap} ${styles.scroll__wrap_active}` : `${styles.scroll__wrap}`;

	return (
		<div className={classForModal} onClick={closeModal}>
			<div className={styles.scroll__img} id='skrollContent'>
				<h2 className={styles.scroll__title}>{title}</h2>
				{children}
				<div className={styles.scroll__icon}>
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
				<img src={scrollBg} alt="scroll"/>
				<div className={styles.scroll__loader}>
					{isFetching && <Loader/> }
				</div>
			</div>
		</div>
	)
}

export default Scroll;