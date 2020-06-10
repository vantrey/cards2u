import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store/store";
import GetUsers from "./getUsers";
import {getUser} from "../bll/getUserReducer";
import s from "./getUser.module.css";
// @ts-ignore
import _ from 'lodash'
import {UserType} from "../../types/entities";

type UsersPropsType = {
    sort: 'asc' | 'desc'
    data: UserType[]
    sortField: string
}

const GetUsersContainer: React.FC = (props) => {
        const {users} = useSelector((state: AppStateType) => state.getUserReducer)
        const dispatch = useDispatch()
        const [data, setOrderedUser] = useState<UsersPropsType>({
            data: [],
            sort: 'asc',
            sortField: 'id'
        })
        useEffect(() => {
            dispatch(getUser())
        }, [])
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

        return (
            <div className={s.get_users_container}>
                <GetUsers users={data.data} onSort={onSort}/>
            </div>
        );
    }
;

export default GetUsersContainer;