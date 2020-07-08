import React from 'react';
import styles from './EmptyDecks.module.css';


const EmptyDecks = () => {

	return (
		<div className={styles.emptyDecks}>
            <p className={styles.emptyDecks__text}>Монада — это объект с функциями
                of и chain. chain похож на map, но он производит разложение вложенных
                объектов в результате.
            </p>
		</div>
	)
}

export default EmptyDecks;




