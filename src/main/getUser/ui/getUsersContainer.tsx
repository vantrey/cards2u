import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store/store";
import GetUsers from "./getUsers";
import {getUser} from "../bll/getUserReducer";
import s from "./getUser.module.css";


const GetUsersContainer = () => {
    const {users} = useSelector((state: AppStateType) => state.getUserReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    },[])

    return (
        <div className={s.get_users_container}>
            <GetUsers users={users}/>
        </div>
    );
};

export default GetUsersContainer;