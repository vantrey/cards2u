import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {globalSearchForDecks} from '../../../bll/searchReducer/searchReducer';
import styles from './SearchByDeckName.module.css'


type ownProps = {
    GetFoundNameOfDeck: (packName: string) => void;
}

const SearchByDeckName: React.FC<ownProps> = ({
                                                  GetFoundNameOfDeck
                                              }) => {

    const [packName, setPackName] = useState<string>('');
    const dispatch = useDispatch();
    const getNameDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    }

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            GetFoundNameOfDeck(packName)
            dispatch(globalSearchForDecks(packName));
            setPackName('');
        }
    }


    return (

        <div>
            <input className={styles.search__input} onChange={getNameDeck}
                   value={packName}
                   onKeyPress={pressEnter}
            />
        </div>
    );
};

export default SearchByDeckName;