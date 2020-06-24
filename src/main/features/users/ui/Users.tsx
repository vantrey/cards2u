import React from 'react';
import {UserType} from "../../../types/entities";
import s from "./User.module.css"


type UsersPropsType = {
    users:  UserType[]
    onSort:(sortField:any)=>void
    sort: 'asc' | 'desc'
    sortField: string
}

const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div className={s.get_users}>
            <table className="table">
                <thead>
                <tr>
                    <th >
                        ID
                        <span className={s.cursorSort} onClick={()=>props.onSort('_id')}>⇵</span>
                    </th>
                    <th>
                        AVATAR
                        <span className={s.cursorSort} onClick={()=>props.onSort('avatar')}>⇵</span>
                    </th>
                    <th>
                        NAME
                        <span className={s.cursorSort} onClick={()=>props.onSort('name')}>⇵</span>
                    </th>
                    <th>
                        EMAIL
                        <span className={s.cursorSort} onClick={()=>props.onSort('email')}>⇵</span>
                    </th>
                    <th onClick={()=>props.onSort('isAdmin')}>
                        IS ADMIN
                        <span className={s.cursorSort} onClick={()=>props.onSort('isAdmin')}>⇵</span>
                    </th>
                    <th>
                        CREATED
                        <span className={s.cursorSort} onClick={()=>props.onSort('created')}>⇵</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(u => (
                    <tr key={u._id}>
                        <td>{u._id}</td>
                        <td><img className={s.user__avatar} src={u.avatar} alt='photoUser' height='50px' width={50}/></td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.isAdmin}</td>
                        <td>{u.created}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Users;