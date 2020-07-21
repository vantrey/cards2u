import React from 'react';
import styles from './DecksNames.module.css';
import {useSelector} from "react-redux";
import EmptyDecks from "../../../components/find_deck/info/emptyDecks/EmptyDecks";
import Loader from '../../loader/Loader';
import {AppStateType} from '../../../../bll/store/store';


type OwnProps={
    deckName:string,
    deckscount:number
}

const DecksNames2:React.FC<OwnProps> = ({deckName, deckscount}) => {

    const {cardPacks,isCardPacksFetching} = useSelector((state:AppStateType) => state.cardPacks);

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.decksNames__wrap}>
                <h5 className={styles.decksNames__title}>Found the decks with the name {deckName} &nbsp;
                    <strong className={styles.subtitle__name}>Number of decks with name{deckName}: {deckscount}</strong>
                </h5>
                {/*	<div className={styles.decksNames__subtitle}>has &nbsp;
					<strong className={styles.subtitle__number}>{deckscount} &nbsp;</strong>decks
				</div>*/}
                {isCardPacksFetching && <Loader/>}
                {!isCardPacksFetching &&
                <div className={styles.decksNames}>
                    {
                        cardPacks && (
                            cardPacks.map(decksNames =>
                                <div className={styles.decksNames__item}
                                     id={decksNames._id}
                                     key={decksNames._id}
                                     data-deckname={decksNames.name}
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

export default DecksNames2;




