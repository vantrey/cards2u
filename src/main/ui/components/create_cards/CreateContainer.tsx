import React from 'react';
import styles from './Create.module.css';
import {useDispatch} from "react-redux";
import CardEntersContainer from "./cardEnters/CardEntersContainer";
import UserCardsContainer from "./userCards/UserCardsContainer";

const CreateContainer = () => {

	const dispatch = useDispatch();


	return (
		<div className={styles.create__wrap}>

			<CardEntersContainer/>

			<UserCardsContainer/>


		</div>
	)
};
export default CreateContainer;