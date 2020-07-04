import React, {useEffect, useState} from 'react';
import styles from './Find.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {actions, getUser} from "../../../features/users/bll/UserReducer";
import ReactPaginate from "react-paginate";
import FindDeck from "./find/FindDeck";
import UserInfo from "../../common/user/UserInfo";


const FindContainer: React.FC = () => {

    const dispatch = useDispatch();
    const {page, pageCount, totalUsersCount, users,isFetching} = useSelector((state: AppStateType) => state.getUserReducer)
    const [showMode, setShowMode] = useState<string>('')

    const pageChangedHandler = (page: { selected: number }) => {
        dispatch(actions.setPage(page.selected + 1))
    }

    useEffect(() => {
        dispatch(getUser(page, pageCount))
    }, [page, pageCount])

    const sortDeckUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getUser(null, null, e.currentTarget.name, '1'))
    }

    const sortDeckDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getUser(null, null, e.currentTarget.name, '0'))
    }



    const onShowDecks = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id
        setShowMode(id)
    }

    const pageCountSize = Math.ceil(totalUsersCount / pageCount);

    return (
        <div className={styles.find__wrap}>

            <UserInfo/>
            <FindDeck users={users}
                      sortDeckUp={sortDeckUp}
                      sortDeckDown={sortDeckDown}
                      onShowDecks={onShowDecks}
                      showMode={showMode}
                      isFetching={isFetching}
            />
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCountSize}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pageChangedHandler}
                containerClassName={styles.pagination}
                activeClassName={"active"}/>

        </div>)
}

export default FindContainer;




