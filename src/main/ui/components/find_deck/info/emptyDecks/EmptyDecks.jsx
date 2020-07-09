import React from 'react';
import styles from './EmptyDecks.module.css';


const EmptyDecks = () => {

	return (
		<div className={styles.emptyDecks}>
            <p className={styles.emptyDecks__text}> Unfortunately your friend has no decks
            </p>
		</div>
	)
}

export default EmptyDecks;




