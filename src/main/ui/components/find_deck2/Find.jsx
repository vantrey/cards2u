import React from 'react';
import styles from './Find.module.css';
import SaveDeckContainer from "../save_deck/SaveDeckContainer";



const Find = () => {


	return (
		<div className={styles.find__wrap}>
			FIND DECK
			<div>
				<SaveDeckContainer/>
			</div>
		</div>
	)
}
export default Find;