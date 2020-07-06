import React from 'react';
import {CardPackType} from "../../../../types/entities";
import styles from './UserDecks.module.css';
import Loader from "../../loader/Loader";


type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    showMyDecks: () => void
    showDecks: boolean
    isFetching: boolean
}

const UserDecks: React.FC<AvaDecksTypeProps> = ({
                                                    cardPacks,
                                                    showMyDecks,
                                                    showDecks,
                                                    isFetching
                                                }) => {

    return (
        <div className={styles.userDecks__wrap}>
            <button disabled={isFetching} onClick={showMyDecks}>Show Decks</button>
            {!showDecks && <div>кнопка не нажата</div>}

            {showDecks && isFetching &&
            <div>
                ... loading {/*<Loader/>*/}
            </div>}

            {showDecks && !isFetching &&
            <div>
                {cardPacks.length === 0 ?
                    <div>You don't have a deck.</div>
                    :
                    (<div>
                        <div>
                            You have {cardPacks.length} decks
                        </div>
                        {cardPacks.map(cardPack =>
                            <div key={cardPack._id}>
                                {cardPack.name}
                                <button>Delete Deck</button>
                            </div>)
                        }
                    </div>)}
            </div>}
        </div>
    );
};

export default UserDecks;