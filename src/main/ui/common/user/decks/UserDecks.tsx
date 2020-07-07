import React, {useEffect} from 'react';
import {CardPackType} from "../../../../types/entities";
import styles from './UserDecks.module.css';
import {dragHandler} from '../../../../helpers/dragHandler/DragHandler';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store/store";
import Loader from "../../loader/Loader";



type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    showMyDecks: () => void
    showDecks: boolean
    onSelectDeck: (e: React.MouseEvent<HTMLDivElement>) => void
    isAuth: boolean
    isPreventFetching: boolean
    isLocalFetching: boolean
}

const UserDecks: React.FC<AvaDecksTypeProps> = ({cardPacks,
                                                    showMyDecks,
                                                    showDecks,
                                                    onSelectDeck,
                                                    isAuth,
                                                    isPreventFetching,
                                                    isLocalFetching

}) => {

    useEffect(() => {
        const dragBlockElement = document.getElementById('drag-X');
        if (dragBlockElement) {
            dragBlockElement.addEventListener('mousedown', dragHandler.start);
            dragBlockElement.addEventListener('mouseup', dragHandler.end);
        }

        return () => {
            if (dragBlockElement) {
                dragBlockElement.removeEventListener('mousedown', dragHandler.start);
                dragBlockElement.removeEventListener('mouseup', dragHandler.end);
            }
        }

    }, []);

    return (
        <div className={styles.userDecks__wrap} >
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
                {cardPacks.length === 0 ?
                    // <div className={styles.userDecks__none}>You don't have a deck.</div>
                    <div className={styles.userDecks__items} id='drag-X'>
                        <div className={styles.item} onClick={onSelectDeck}>
                            <small className={styles.item__title}>Name Name</small>
                        </div>
                         <div className={styles.item} onClick={onSelectDeck}>
                            <small className={styles.item__title}>Name Native</small>
                        </div>
                         <div className={styles.item} onClick={onSelectDeck}>
                            <small className={styles.item__title}>React Native</small>
                        </div>
                         <div className={styles.item} onClick={onSelectDeck}>
                            <small className={styles.item__title}>My english</small>
                        </div>
                         <div className={styles.item} onClick={onSelectDeck}>
                            <small className={styles.item__title}>Title Title</small>
                        </div>

                    </div>
                    :
                    (
                        <div className={styles.userDecks__have}>
                            {cardPacks.map(cardPack =>
                                <div
                                    className={styles.decks__wrap}
                                    id={cardPack._id}
                                    key={cardPack._id}
                                    onClick={onSelectDeck}
                                >
                                    <div className={styles.item}>
                                        <small className={styles.item__title}>{cardPack.name}</small>
                                    </div>
                                    {/*<button className={styles.decks__button}>delete</button>*/}
                                </div>)
                            }
                        </div>
                    )
                }
			</>}
        </div>
    );
};

export default UserDecks;