import React from 'react';
import styles from './DecksNames.module.css';
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../../bll/store/store";
import EmptyDecks from "../emptyDecks/EmptyDecks";
import Loader from "../../../../common/loader/Loader";


const DecksNames = ({nameUser, onSelectDeck, deckscount}) => {

    const {cardPacks} = useSelector((state) => state.cardPacks);
    const {isCardPacksFetching} = useSelector((state) => state.cardPacks);

	return (
		<div className={styles.container__rightBlock}>
			<div className={styles.decksNames__wrap}>

				<>
					<h5 className={styles.decksNames__title}>Your friend &nbsp;
						<strong className={styles.subtitle__name}>{nameUser}</strong>
					</h5>
					<div className={styles.decksNames__subtitle}>has &nbsp;
						<strong className={styles.subtitle__number}>{deckscount} &nbsp;</strong>decks
					</div>
				</>
				{/*<>*/}
				{/*	<h5 className={styles.decksNames__title}>Decks with the name&nbsp;*/}
				{/*		<strong className={styles.subtitle__name}>{nameUser}&nbsp;</strong>*/}
				{/*	</h5>*/}
				{/*	<div className={styles.decksNames__subtitle}>found&nbsp;*/}
				{/*		<strong className={styles.subtitle__number}>{deckscount}</strong>*/}
				{/*	</div>*/}
				{/*</>*/}

				{isCardPacksFetching && <Loader/>}
				{!isCardPacksFetching &&
				<div className={styles.decksNames}>
					{
						cardPacks && (
							cardPacks.map (decksNames =>
								<div className={styles.decksNames__item}
									 id={decksNames._id}
									 key={decksNames._id}
									 data-deckname={decksNames.name}
									 onClick={onSelectDeck}
								>{decksNames.name}
								</div>))

					} {
					(cardPacks.length === 0) && <EmptyDecks/>
				}
				</div>
				}
			</div>
		</div>
	)
}

export default DecksNames;




