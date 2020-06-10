import React from 'react';
import {UserType} from "../../types/entities";
import s from "./getUser.module.css"


type UsersPropsType = {
    users:  UserType[]
    onSort:(sortField:any)=>void

}

const GetUsers: React.FC<UsersPropsType> = (props) => {
    return (
        <div className={s.get_users}>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={()=>props.onSort('_id')} >ID</th>
                    <th onClick={()=>props.onSort('avatar')}>AVATAR</th>
                    <th onClick={()=>props.onSort('name')}>NAME</th>
                    <th onClick={()=>props.onSort('email')}>EMAIL</th>
                    <th onClick={()=>props.onSort('isAdmin')}>IS ADMIN</th>
                    <th onClick={()=>props.onSort('created')}>CREATED</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(u => (
                    <tr key={u._id}>
                        <td>{u._id}</td>
                        <td><img src={u.avatar} alt='photoUser' height='50px' width={50}/></td>
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
export default GetUsers;