import React, {useEffect} from 'react';
import styles from './../UserDecks.module.css';
import {CardPackType} from '../../../../../types/entities';


type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    onSelectDeck: (e: React.MouseEvent<HTMLDivElement>) => void
}

const UserDecksItem: React.FC<AvaDecksTypeProps> = ({
                                                        cardPacks,
                                                        onSelectDeck,
                                                    }) => {
    //
    // useEffect(() => {
    //
    //     const dragBlockElement = document.getElementById('drag-X');
    //
    //     if (cardPacks.length > 0) {
    //         console.log("!!!")
    //         console.log(dragBlockElement)
    //
    //         const dragHandler = {
    //             lastClientX: 0,
    //             start: function (e: any) {
    //                 if (e.button == 0 && dragBlockElement) {
    //                     console.log("start")
    //                     dragBlockElement.addEventListener('mousemove', dragHandler.drag);
    //                     dragHandler.lastClientX = e.clientX;
    //                     e.preventDefault();
    //                 }
    //             },
    //             end: function (e: any) {
    //                 console.log("end")
    //                 if (e.button == 0 && dragBlockElement) {
    //                     dragBlockElement.removeEventListener('mousemove', dragHandler.drag);
    //                 }
    //             },
    //             drag: function (e: any) {
    //                 console.log("delta")
    //                 let delta = e.clientX - dragHandler.lastClientX;
    //                 // window.scrollTo(window.scrollX - delta, window.scrollY);
    //                 if (dragBlockElement) {
    //                     dragBlockElement.scrollLeft = - delta;
    //
    //                 }
    //                 dragHandler.lastClientX = e.clientX;
    //                 e.preventDefault();
    //             }
    //         };
    //
    //         if (dragBlockElement) {
    //             dragBlockElement.addEventListener('mousedown', dragHandler.start);
    //             dragBlockElement.addEventListener('mouseup', dragHandler.end);
    //         }
    //     } else {
    //         console.log("---")
    //     }

        // return () => {
        //     if (dragBlockElement) {
        //         dragBlockElement.removeEventListener('mousedown', dragHandler.start);
        //         dragBlockElement.removeEventListener('mouseup', dragHandler.end);
        //     }
        // }

    // }, [cardPacks.length]);

    return (
        <div className={styles.userDecks__have} id='drag-X'>
            {cardPacks.map(cardPack =>
                <div
                    className={styles.decks__wrap}
                    id={cardPack._id}
                    data-cardpackname={cardPack.name}
                    key={cardPack._id}
                    onClick={onSelectDeck}
                >
                    <div className={styles.item}>
                        <small className={styles.item__title}>{cardPack.name}</small>
                    </div>
                </div>)
            }
        </div>
    );
};

export default UserDecksItem;