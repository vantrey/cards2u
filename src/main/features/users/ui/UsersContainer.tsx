import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import Users from "./Users";
import {actions, getUser} from "../bll/UserReducer";
import s from "./User.module.css";
// @ts-ignore
import _ from 'lodash'
import {UserType} from "../../../types/entities";
// @ts-ignore
import ReactPaginate from 'react-paginate';


type UsersPropsType = {
    sort: 'asc' | 'desc'
    data: UserType[]
    sortField: string
}

const UsersContainer: React.FC = (props) => {
        const {users, pageCount, page, totalUsersCount, isFetching} = useSelector((state: AppStateType) => state.getUserReducer)
        const dispatch = useDispatch()
        const [data, setOrderedUser] = useState<UsersPropsType>({
            data: [],
            sort: 'asc',
            sortField: 'id'
        })

        const pageChangedHandler = (page: { selected: number }) => {
            dispatch(actions.setPage(page.selected + 1))
        }
        useEffect(() => {
            dispatch(getUser(page, pageCount))
        }, [page, pageCount])

        useEffect(() => {
            setOrderedUser({
                ...data,
                data: users,
            })
        }, [users])
        const onSort = (sortField: any) => {
            const clonedData = users.concat()
            const sortType = data.sort === 'asc' ? 'desc' : 'asc'
            const orderedUser = _.orderBy(clonedData, sortField, sortType)
            setOrderedUser({
                data: orderedUser,
                sort: sortType,
                sortField: sortField
            })
        }

        const pageCountSize = Math.ceil(totalUsersCount / pageCount)

        return (
            <div className={s.get_users_container}>
                {isFetching && <span>...LOADING</span>}
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCountSize}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pageChangedHandler}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    nextClassName='page-item'
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
                <Users
                    users={data.data}
                    onSort={onSort}
                    sort={data.sort}
                    sortField={data.sortField}
                />
            </div>
        );
    }
;

export default UsersContainer;