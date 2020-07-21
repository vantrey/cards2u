import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {globalSearchForDecks} from '../../../bll/searchReducer/searchReducer'
import {AppStateType} from '../../../bll/store/store';
import DecksNames2 from './name_deck_for_search/DecksNames2';


const SearchByDeckName: React.FC = () => {
    const totalCardPacksCount = useSelector((state: AppStateType) => state.cardPacks.totalCardPacksCount);
    const [packName, setPackName] = useState<string>('');
    const dispatch = useDispatch();
    const getNameDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);

    }
    const setNameDeck = () => {
        dispatch(globalSearchForDecks(packName));
        setPackName('');
    }

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setNameDeck();
        }
    }

    const divStyle = {
        display: 'flex',
        flex_direction: 'column'
    }

    return (

        <div>
            <input onChange={getNameDeck} value={packName} autoFocus={true} onKeyPress={pressEnter}
                   onBlur={setNameDeck}/>
            {totalCardPacksCount !== 0 &&
            <DecksNames2 deckscount={totalCardPacksCount} deckName={packName}/>
            }
            {totalCardPacksCount === 0 &&
            <span>No deck with this name found!</span>
            }
        </div>
    );
};

export default SearchByDeckName;