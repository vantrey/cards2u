import React from 'react';
import styles from './Logout.module.css'
import logoutImg from './../../images/LOGOUT.png'
import { useDispatch } from "react-redux";
import { logout } from "../../../auth/login/loginReducer"


const Logout = ({toggleBg}) => {

	const dispatch = useDispatch ()
	const onLogout = () => {
		dispatch (logout ())
	}

	const classForLogout = toggleBg === true ? `${styles.logout__wrap} ${styles.logout__wrap_notActive}` : `${styles.logout__wrap}`;

	return (
		<div className={classForLogout} onClick={onLogout}>
			<div className={styles.logout__block}>
				<div className={styles.logout__img}>
					<img src={logoutImg} alt='logout'/>
				</div>
			</div>
		</div>
	)
}
export default Logout