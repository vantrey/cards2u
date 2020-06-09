import React from 'react';
import GetUser from "./getUser";
import {UserType} from "../../types/entities";
import s from "./getUser.module.css"

type UsersPropsType = {
    users: UserType[]
}


const GetUsers:React.FC<UsersPropsType>= (props)=>{
    const getUsersMap = props.users.map(u=>
        <GetUser
        avatar={u.avatar}
        created={u.created}
        email={u.email}
        isAdmin={u.isAdmin}
        name={u.name}
        key={u._id}
        _id={u._id}

    />)
    return (
        <div className={s.get_users}>
            {getUsersMap}
        </div>
    )
}
export default GetUsers;