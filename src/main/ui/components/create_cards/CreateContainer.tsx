import React from 'react';
import styles from './Create.module.css';
import {profileActions} from "../../../bll/profile/profileReducer";
import {useDispatch} from "react-redux";



const CreateContainer = () => {

	const dispatch = useDispatch();

	dispatch(profileActions.setUser({
		avatar: '',
		created: '',
		email: '',
		isAdmin: false,
		name: '',
		publicCardPacksCount: 0,
		updated: '',
		verified: false,
		_id: ''}));

	return (
		<div className={styles.create__wrap}>



		</div>
	)
};
export default CreateContainer;