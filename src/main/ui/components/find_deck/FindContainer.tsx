import React, {useEffect, useState} from 'react';
import styles from './Find.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getUser, usersActions} from "../../../features/users/bll/UserReducer";
import ReactPaginate from "react-paginate";
import FindDeck from "./find/FindDeck";
import UserInfo from "../../common/user/UserInfo";
import Loader from "../../common/loader/Loader";
import {getCardPacks} from '../../../features/cardsPacks/bll/cardPacksReducer';
import DecksQuestions from "./info/decksQuestions/DecksQuestions";
import DecksNames from './info/decksNames/DecksNames';
import DecksLogout from "./info/decksLogout/DecksLogout";
import PopupAuth from '../../common/popUp/popUp_Authorization/PopupAuth';
import {useLocalFetch} from "../../../helpers/localFetchingHook";


const FindContainer: React.FC = () => {
    const dispatch = useDispatch();
    const {page, pageCount, totalUsersCount, users} = useSelector((state: AppStateType) => state.getUserReducer);
    const {isAuth} = useSelector((state: AppStateType) => state.login);
    const [ modal, setModal ] = useState (false);
    const [ nameUser, setNameUser ] = useState<string | null> ('');

    const [showMode, setShowMode] = useState<string>('');
    const [popupAuth, setPopupAuth] = useState<boolean>(false);
    const [selectUser, setSelectUser] = useState<boolean>(false);
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);
    const {setIsLocalFetching, isLocalFetching} = useLocalFetch();


    const pageChangedHandler = (page: { selected: number }) => {
        dispatch(usersActions.setPage(page.selected + 1))
    };

    useEffect(() => {
        setIsLocalFetching(true);
        dispatch(getUser(page, pageCount))
    }, [page, pageCount])

    const sortDeckUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getUser(1, 10, e.currentTarget.name, '1'))
    };

    const sortDeckDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getUser(1, 10, e.currentTarget.name, '0'))
    };

    const onShowDecks = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id
        const nameUser = e.currentTarget.getAttribute('data-nameuser');
        setNameUser(nameUser);
        setShowMode(id);
        setIsLocalFetching(true);
        setSelectUser(true);
        dispatch(getCardPacks(1, 100, id))
    };

    const pageCountSize = Math.ceil(totalUsersCount / pageCount);

    useEffect (() => {
        let timerId = setTimeout (() => {
            setPopupAuth(true)
        }, 500)

        return () => {
            clearTimeout (timerId)
        }
    }, []);

    return (
        <div className={styles.find__wrap}>
            <div className={styles.find__left}> </div>
            <div className={styles.find__container}>
                <div className={styles.container__top}>
                    <UserInfo/>
                </div>
                <div className={styles.container__body}>
                    <div className={styles.container__leftBlock}>
                        <div className={styles.find__wrap_block}>
                            {
                                !isAuth &&
								<div className={styles.find__wrap_mirror}>
									<div className={styles.find__loader}> </div>
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
                                    containerClassName={styles.pagination}
                                    activeClassName={styles.active}/>
                            </div>
                        </div>
                    </div>

                    { !isAuth &&  <DecksLogout/> }
                    { isAuth && !selectUser && !decksQuestions && <DecksLogout/> }
                    { isAuth && selectUser && !decksQuestions && <DecksNames nameUser={nameUser}/> }
                    {/*{ isAuth && !selectUser &&  !decksQuestions && <DecksQuestions/> }*/}

                </div>
            </div>
            <div className={styles.find__right}> </div>
            {
                !isAuth && popupAuth && <PopupAuth setPopupAuth={setPopupAuth}
												   modal={modal} setModal={setModal}/>
            }
        </div>)
}

export default FindContainer;




