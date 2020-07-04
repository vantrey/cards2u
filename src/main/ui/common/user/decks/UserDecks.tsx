import React from 'react';
import {CardPackType} from "../../../../types/entities";


type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    ShowMyDecs: () => void
}


const UserDecks: React.FC<AvaDecksTypeProps> = ({cardPacks, ShowMyDecs}) => {


    return (
        <div>
            {cardPacks === undefined ?
                (<button onClick={ShowMyDecs}></button>) :
                cardPacks === [] ?
                    (<div>You don't have a deck.</div>) :
                    (<div>
                        <div>
                            You have {cardPacks} decks
                        </div>
                        {cardPacks.map(cardPack =>
                            <div key={cardPack._id}>
                                {cardPack.name}
                                <button>Delete Deck</button>
                            </div>)
                        }
                    </div>)
            }
        </div>
    );
};

export default UserDecks;