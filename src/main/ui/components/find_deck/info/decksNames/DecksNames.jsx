import React from 'react';
import styles from './DecksNames.module.css';
import { useSelector } from "react-redux";
import EmptyDecks from "../emptyDecks/EmptyDecks";
import Loader from "../../../../common/loader/Loader";


const DecksNames = ({nameUser, onSelectDeck, deckscount}) => {

    const {cardPacks, isCardPacksFromSearch} = useSelector((state) => state.cardPacks);
    const {isCardPacksFetching} = useSelector((state) => state.cardPacks);
    const {cardPacksTotalCount, foundName, isSearchSuccess, isSearchFetching } =
		useSelector((state) => state.searchReducer);

	return (
		<div className={styles.container__rightBlock}>
			<div className={styles.decksNames__wrap}>
				{!isCardPacksFromSearch &&
				<>
					<h5 className={styles.decksNames__title}>Your friend &nbsp;
						<strong className={styles.subtitle__name}>{nameUser}</strong>
					</h5>
					<div className={styles.decksNames__subtitle}>has &nbsp;
						<strong className={styles.subtitle__number}>{deckscount} &nbsp;</strong>decks
					</div>
				</>
				}
				{isCardPacksFromSearch &&
				<>
					<h5 className={styles.decksNames__title}>Decks with the name&nbsp;
						<strong className={styles.subtitle__name}>{foundName}&nbsp;</strong>
					</h5>
					<div className={styles.decksNames__subtitle}>found&nbsp;
						<strong className={styles.subtitle__number}>{cardPacksTotalCount}</strong>
					</div>
				</>
				}

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
								>
									<div className={styles.item__deckName}>{decksNames.name}</div>
									<div className={styles.item__border}></div>
									<div className={styles.item__cardCount}>
										<span className={styles.cardCount__title}>cards:&nbsp;</span>
										<span className={styles.cardCount__number}>{decksNames.cardsCount}</span>
									</div>
								</div>))

					}
					{
						(cardPacks.length === 0) && <EmptyDecks/>
					}
				</div>
				}
			</div>
		</div>
	)
}

export default DecksNames;




