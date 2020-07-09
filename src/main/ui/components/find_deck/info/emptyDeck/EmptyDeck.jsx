import React from 'react';
import styles from './EmptyDeck.module.css';


const EmptyDeck = () => {

	return (
		<div className={styles.emptyDecks}>
            <p className={styles.emptyDecks__text}>There are no question cards in this deck yet.</p>
		</div>
	)
}

export default EmptyDeck;




