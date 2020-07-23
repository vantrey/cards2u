import styles from '../../../components/find_deck/info/decksNames/DecksNames.module.css';
import Loader from '../../loader/Loader';
import EmptyDecks from '../../../components/find_deck/info/emptyDecks/EmptyDecks';
import React from 'react';
import {CardPackType} from '../../../../types/entities';

type SearchResultType = {
    packsFound: Array<CardPackType>,
    cardPacksTotalCount: number,
    isSearchFetching: boolean,
    foundNameDeck: string,
    onSelectDeck: (e: React.MouseEvent<HTMLDivElement>) => void
}

const SearchResult: React.FC<SearchResultType> = ({
                                                      onSelectDeck,
                                                      packsFound,
                                                      cardPacksTotalCount,
                                                      isSearchFetching,
                                                      foundNameDeck
                                                  }) => {


    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.decksNames__wrap}>
                <h5 className={styles.decksNames__title}>Nicknamed decks &nbsp;
                    <strong className={styles.subtitle__name}>{foundNameDeck}</strong>
                </h5>
                <div className={styles.decksNames__subtitle}>has &nbsp;
                    <strong className={styles.subtitle__number}>{cardPacksTotalCount} &nbsp;</strong>decks
                </div>
                {isSearchFetching && <Loader/>}
                {!isSearchFetching &&
                <div className={styles.decksNames}>
                    {
                        packsFound && (
                            packsFound.map(decksNames =>
                                <div className={styles.decksNames__item}
                                     id={decksNames._id}
                                     key={decksNames._id}
                                     data-deckname={decksNames.name}
                                     onClick={onSelectDeck}
                                >{decksNames.name}
                                </div>))

                    } {
                    (packsFound.length === 0) && <EmptyDecks/>
                }
                </div>
                }
            </div>
        </div>
    )
}

export default SearchResult;

