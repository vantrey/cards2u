import React from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.webp';
import closeIcon from '../../icons/cancel.png';
import Loader from "../loader/Loader";
import Input1 from "../Input/Input1";
import Input from "../Input/Input";
import Form1 from "../form/Form1";


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
				{/*<h2  className={styles.scroll__title}>Registration</h2>*/}
				<h2  className={styles.scroll__title}>Login</h2>

				<Form1/>

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