import React from 'react';
import styles from './Search.module.css'


type OwnPropsType = {

}

type PropsType = OwnPropsType

const Search: React.FC<PropsType> = () => {

    return (
        <div className={styles.column}>
            <div className={styles.search}>
                <div className={styles.search__bar}>
                    <input id='searchOne' type='checkbox'/>
                        <label className={styles.search__label} htmlFor='searchOne'>
                            <i className={styles.search__icon_search}>D</i>
                            <i className={styles.search__icon_close}>H</i>
                            <p>|</p>
                        </label>
                        <input className={styles.search__input} placeholder='Search...' type='text'/>
                </div>
            </div>
        </div>
    )
};

export default Search
