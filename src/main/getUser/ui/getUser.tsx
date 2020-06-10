import React from 'react';
import s from "./getUser.module.css"

type UserPropsType = {
    avatar: string
    created: string
    email: string
    name: string
    isAdmin: boolean
    _id: string
}


const GetUser: React.FC<UserPropsType> = (props) => {
    return (
        <div className={s.get_user}>
            <div className={s.user_container}>USER:</div>
            <div>Name:<div className={s.name_user}>{props.name}</div></div>
            <div className={s.avatar_user}><h4>Avatar:</h4><img src={props.avatar} alt='photoUser' height='50px'/></div>
            <div><h4>Email:</h4>{props.email}</div>
            <div><h4>Is Admin?:</h4>{props.isAdmin}</div>
            <div><h4>Created:</h4> {props.created}</div>
            <div><h4>Id User:</h4>{props._id}</div>
        </div>
    )
}
export default GetUser;