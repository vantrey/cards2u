import React from 'react';
import styles from './DecksNames.module.css';
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../../bll/store/store";
import EmptyDecks from "../emptyDecks/EmptyDecks";


const DecksNames = ({nameUser, onSelectDeck}) => {

    const {cardPacks} = useSelector((state) => state.cardPacks);

	return (
		<div className={styles.container__rightBlock}>
			<div className={styles.decksNames__wrap}>
				<h5 className={styles.decksNames__title}>Your friend &nbsp;
					<strong className={styles.subtitle__name}>{nameUser}</strong>
				</h5>
				<div className={styles.decksNames__subtitle}>has &nbsp;
					<strong className={styles.subtitle__number}>{cardPacks.length} &nbsp;</strong>decks
				</div>
				<div className={styles.decksNames}>
                    {
                        cardPacks && (
                        cardPacks.map(decksNames =>
                        <div className={styles.decksNames__item}
                        id={decksNames._id}
                        key={decksNames._id}
						data-deckname={decksNames.name}
                        onClick={onSelectDeck}
                        >{decksNames.name}
                        </div>))

                    }					{
					(cardPacks.length === 0) &&  <EmptyDecks/>
					}
				</div>
			</div>
		</div>
	)
}

export default DecksNames;




