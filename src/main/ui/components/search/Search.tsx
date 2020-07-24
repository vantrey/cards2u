import React, {useState} from 'react';
import styles from './Search.module.css'
import close_icon from '../../icons/search-close1.png'
import search_icon from '../../icons/search.png'
import {useDispatch, useSelector} from 'react-redux';
import {globalSearchForDecks} from '../../../bll/searchReducer/searchReducer';
import {AppStateType} from "../../../bll/store/store";


type OwnProps = {
    isAuth: boolean
}

const Search: React.FC<OwnProps> = ({isAuth}) => {
    const [packName, setPackName] = useState<string>('');
    const [blockedInput, setBlock] = useState(false);
    const dispatch = useDispatch();

    const getNameDeck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    }

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isAuth) {
            setBlock(true)
        }
        if (e.key === 'Enter') {
            dispatch(globalSearchForDecks(packName));
            setPackName('');
        }
    }

    return (
        <div className={styles.search}>
            <div className={styles.search__bar}>
                <input id='searchOne' type='checkbox'/>
                <label className={styles.search__label} htmlFor='searchOne'>
                    <i className={styles.search__icon_search}>
                        <div className={styles.icon__wrap}>
                            <img src={search_icon} alt="icon"/>
                        </div>
                    </i>
                    <i className={styles.search__icon_close}>
                        <div className={styles.icon__wrap}>
                            <img src={close_icon} alt="icon"/>
                        </div>
                    </i>
                    <p>|</p>
                </label>
                <input className={styles.search__input} maxLength={25} tabIndex={1}
                       autoFocus={true} placeholder='Search...' type='text'
                       disabled={blockedInput}
                       onChange={getNameDeck}
                       value={packName}
                       onKeyPress={pressEnter}/>
            </div>
        </div>
    )
};

export default Search
