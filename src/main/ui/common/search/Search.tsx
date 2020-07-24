import React from 'react';
import styles from './Search.module.css'
import close_icon from '../../icons/search-close1.png'
import search_icon from '../../icons/search.png'



type OwnPropsType = {

}

type PropsType = OwnPropsType

const Search: React.FC<PropsType> = () => {

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
                               autoFocus={true} placeholder='Search...' type='text'/>
                </div>
            </div>
    )
};

export default Search
