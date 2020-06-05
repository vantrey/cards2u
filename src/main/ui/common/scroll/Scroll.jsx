import React from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.png';
import closeIcon from '../../icons/cancel .png';
import Loader from "../loader/Loader";


const Scroll = ({ modal, setModal }) => {

	const closeModal = (e) =>{
		if (e.target.matches('#closeIconId') || (e.target.closest('#skrollContent') === null) ) {
			setModal(false);
		}
	};

	const classForModal = modal === true ? `${styles.scroll__wrap} ${styles.scroll__wrap_active}` : `${styles.scroll__wrap}`;

	return (
		<div className={classForModal}  onClick={closeModal}>
			<div className={styles.scroll__img}  id='skrollContent'>
				<div className={styles.scroll__icon}  >
					<img src={closeIcon} alt="cancel-Icon" id='closeIconId'/>
				</div>
				<img src={scrollBg} alt="scroll"/>
				<div className={styles.scroll__loader}>
					<Loader/>
				</div>
			</div>
		</div>
	)
}
export default Scroll;