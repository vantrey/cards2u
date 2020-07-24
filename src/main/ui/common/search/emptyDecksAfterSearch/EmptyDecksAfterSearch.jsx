import React from 'react';
import styles from './EmptyDecksAfterSearch.module.css';


const EmptyDecksAfterSearch = () => {

	return (
		<div className={styles.emptyDecks}>
            <p className={styles.emptyDecks__text}> The deck with the specified name was not found
            </p>
		</div>
	)
}

export default EmptyDecksAfterSearch;




