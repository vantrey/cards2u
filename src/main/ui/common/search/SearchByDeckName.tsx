import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {globalSearchForDecks} from '../../../bll/searchReducer/searchReducer';
import styles from './SearchByDeckName.module.css'


type ownProps = {
    isAuth:boolean
}

const SearchByDeckName: React.FC<ownProps> = ({isAuth}) => {
    const [packName, setPackName] = useState<string>('');
    const [blockedInput,setBlock]=useState(false)
    const dispatch = useDispatch();
    const getNameDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    }

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(!isAuth) {
            setBlock(true)
        }
        if (e.key === 'Enter') {
            dispatch(globalSearchForDecks(packName));
            setPackName('');
        }
    }
    return (
        <div>
            <input className={styles.search__input}
                   placeholder='Look for the deck'
                   disabled={blockedInput}
                   onChange={getNameDeck}
                   value={packName}
                   onKeyPress={pressEnter}
            />
        </div>
    );
};

export default SearchByDeckName;