import React from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.png';
import closeIcon from '../../icons/cancel .png';


const Scroll = ({ modal, setModal }) => {

	const closeModal = () =>{
		setModal(false);
	};

	const classForModal = modal === true ? `${styles.scroll__wrap} ${styles.scroll__wrap_active}` : `${styles.scroll__wrap}`;

	return (
		<div className={classForModal} id='modal'>
			<div className={styles.scroll__img}>
				<div className={styles.scroll__icon} id='closeIconId' onClick={closeModal}>
					<img src={closeIcon} alt="cancel-Icon"/>
				</div>
				<img src={scrollBg} alt="scroll"/>
			</div>
		</div>
	)
}
export default Scroll;