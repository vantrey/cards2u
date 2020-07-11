import React, {useEffect, useState} from 'react';
import styles from './Find.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getUser, usersActions} from "../../../features/users/bll/UserReducer";
import ReactPaginate from "react-paginate";
import FindDeck from "./find/FindDeck";
import UserInfo from "../../common/user/UserInfo";
import {getCardPacks} from '../../../features/cardsPacks/bll/cardPacksReducer';
import DecksQuestions from "./info/decksQuestions/DecksQuestions";
import DecksNames from './info/decksNames/DecksNames';
import DecksLogout from "./info/decksLogout/DecksLogout";
import PopupAuth from '../../common/popUp/popUp_Authorization/PopupAuth';
import {useLocalFetch} from "../../../helpers/localFetchingHook";
import {useLocation} from 'react-router-dom';
import {loginActions} from '../../../auth/login/loginReducer';
import {get_Cards} from "../../../features/Cards/bll/cardsReducer";
import {FindFreeDeck} from '../../../helpers/findFreeDeck/FindFreeDeck';
import {repository} from '../../../helpers/repos_localStorage/Token';
import PopupFreeSlot from './save_favorites/popup_freeSlot/PopupFreeSlot';
import {CardType} from "../../../types/entities";
import {updateUserFavoriteDecks} from '../../../bll/favoriteDecks/favoriteDecksReducer';


const FindContainer: React.FC = () => {

    const dispatch = useDispatch();
    const {page, pageCount, totalUsersCount, users} = useSelector((state: AppStateType) => state.getUserReducer);
    const {cards, cardPackName} = useSelector((state: AppStateType) => state.cards);
    const {isAuth, userId} = useSelector((state: AppStateType) => state.login);
    const [modal, setModal] = useState(false);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
    const [nameUser, setNameUser] = useState<string | null>('');
    const [deckscount, setDeckscount] = useState<string | null>('');
    const [popupSaveToDeckOk, setPopupSaveToDeckOk] = useState<boolean>(false);
    const [saveToFavoritePopup, setSaveToFavoritePopup] = useState<boolean>(false);
    const [favoriteSlotID, setFavoriteSlotID] = useState<string>('');

    const [showMode, setShowMode] = useState<string>('');
    const [popupAuth, setPopupAuth] = useState<boolean>(false);
    const [selectUser, setSelectUser] = useState<boolean>(false);
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);
    const {setIsLocalFetching, isLocalFetching} = useLocalFetch();
    const currentLocation = useLocation();

    let currentPath = currentLocation.pathname;

    useEffect(() => {
        dispatch(loginActions.setCurrentLocation(currentPath));
    }, [currentPath])


    const pageChangedHandler = (page: { selected: number }) => {
        dispatch(usersActions.setPage(page.selected + 1))
    };

    useEffect(() => {
        setIsLocalFetching(true);
        dispatch(getUser(page, pageCount))
    }, [page, pageCount])

    const sortDeckUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsLocalFetching(true);
        dispatch(getUser(1, 10, e.currentTarget.name, '1'))
    };

    const sortDeckDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsLocalFetching(true);
        dispatch(getUser(1, 10, e.currentTarget.name, '0'))
    };

    const onShowDecks = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id
        const nameUser = e.currentTarget.getAttribute('data-nameuser');
        const deckscount = e.currentTarget.getAttribute('data-deckscount');
        setNameUser(nameUser);
        setDeckscount(deckscount);
        setShowMode(id);
        setIsLocalFetching(true);
        setSelectUser(true);
        setDecksQuestions(false);
        dispatch(getCardPacks(1, 100, id))
    };

    const pageCountSize = Math.ceil(totalUsersCount / pageCount);

    const onSelectDeck = (e: React.MouseEvent<HTMLDivElement>) => {
        const deckname = e.currentTarget.getAttribute('data-deckname');
        setDecksQuestions(true);
        dispatch(get_Cards(e.currentTarget.id, deckname));
    };

    useEffect(() => {
        let timerId = setTimeout(() => {
            setPopupAuth(true)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, []);

    const SaveToFavoriteDecks = () => {
        const freeSlotID = FindFreeDeck(userId);
        if (freeSlotID) {
            // repository.updateUserFavoriteDeck(userId, freeSlotID, cardPackName, cards);
            dispatch(updateUserFavoriteDecks(userId, freeSlotID, cardPackName, cards));
            setPopupSaveToDeckOk(true);
        } else {
            setSaveToFavoritePopup(true);
        }
    }

    const SaveToFavoriteDecksSID = () => {
        // repository.updateUserFavoriteDeck(userId, favoriteSlotID, cardPackName, cards);
        dispatch(updateUserFavoriteDecks(userId, favoriteSlotID, cardPackName, cards));
        setPopupSaveToDeckOk(true);
    }

    const classForPagination = isPreventFetching ? `${styles.pagination} ${styles.pagination__block}` : `${styles.pagination}`
    return (
        <div className={styles.find__wrap}>
            <div className={styles.find__left}></div>
            <div className={styles.find__container}>
                <div className={styles.container__top}>
                    <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>
                </div>
                <div className={styles.container__body}>
                    <PopupFreeSlot setSaveToFavoritePopup={setSaveToFavoritePopup}
                                   saveToFavoritePopup={saveToFavoritePopup}
                                   setFavoriteSlotID={setFavoriteSlotID}
                                   SaveToFavoriteDecksSID={SaveToFavoriteDecksSID}
                    />
                    <div className={styles.container__leftBlock}>
                        <div className={styles.find__wrap_block}>
                            {
                                !isAuth &&
								<div className={styles.find__wrap_mirror}>
									<div className={styles.find__loader}></div>
								</div>
                            }
                            <FindDeck users={users}
                                      sortDeckUp={sortDeckUp}
                                      sortDeckDown={sortDeckDown}
                                      onShowDecks={onShowDecks}
                                      showMode={showMode}
                                      isLocalFetching={isLocalFetching}
                            />
                            <div className={styles.find__paginate}>
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={pageCountSize}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
                                    onPageChange={pageChangedHandler}
                                    containerClassName={classForPagination}
                                    activeClassName={styles.active}/>
                            </div>
                        </div>
                    </div>

                    {!isAuth && <DecksLogout/>}
                    {isAuth && !selectUser && !decksQuestions && <DecksLogout/>}
                    {isAuth && selectUser && !decksQuestions && <DecksNames
						nameUser={nameUser} onSelectDeck={onSelectDeck} deckscount={deckscount}
						isLocalFetching={isLocalFetching}/>}
                    {isAuth && selectUser && decksQuestions && <DecksQuestions
						cardPackName={cardPackName} cards={cards} SaveToFavoriteDecks={SaveToFavoriteDecks}
						popupSaveToDeckOk={popupSaveToDeckOk} setPopupSaveToDeckOk={setPopupSaveToDeckOk}/>}

                </div>
            </div>
            <div className={styles.find__right}></div>
            {
                !isAuth && popupAuth && <PopupAuth setPopupAuth={setPopupAuth}
												   modal={modal} setModal={setModal}/>
            }
        </div>)
}

export default FindContainer;




