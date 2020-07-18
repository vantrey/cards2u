import React, {useEffect} from 'react';
import {CardPackType} from "../../../../types/entities";
import styles from './UserDecks.module.css';
import {dragHandler} from '../../../../helpers/dragHandler/DragHandler';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store/store";
import Loader from "../../loader/Loader";
import UserDecksItem from './userDecksItem/UserDecksItem';


type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    showMyDecks: () => void
    showDecks: boolean
    onSelectDeck: (e: React.MouseEvent<HTMLDivElement>) => void
    isAuth: boolean
    isPreventFetching: boolean
    isLocalFetching: boolean
}

const UserDecks: React.FC<AvaDecksTypeProps> = ({
                                                    cardPacks,
                                                    showMyDecks,
                                                    showDecks,
                                                    onSelectDeck,
                                                    isAuth,
                                                    isPreventFetching,
                                                    isLocalFetching
                                                }) => {

    return (
        <div className={styles.userDecks__wrap}>
            {!showDecks &&
			<button
				className={styles.userDecks__button}
				disabled={!isAuth || isPreventFetching}
				onClick={showMyDecks}
			>
				<strong className={styles.button__text}>Show my decks</strong>
			</button>}
            {showDecks && isLocalFetching && <Loader/>}
            {showDecks && !isLocalFetching &&
			<>
                {cardPacks.length === 0 &&  <div className={styles.userDecks__none}>You don't have a deck.</div>}
                {cardPacks.length !== 0 &&
                    <UserDecksItem cardPacks={cardPacks} onSelectDeck={onSelectDeck}/>
                }
			</>
            }
        </div>
    );
};

export default UserDecks;