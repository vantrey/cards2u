import React from 'react';
import styles from './Profile.module.css'
import {UserType} from "../../../types/entities";

type ProfilePropsType = {
    onEditMode: () => void
    nameValue: string
    onNameValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isEditMode: boolean
    updateName: () => void
    user: UserType
    isFetching: boolean
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 onEditMode,
                                                 isEditMode,
                                                 nameValue,
                                                 onNameValueChange,
                                                 updateName,
                                                 user,
                                                 isFetching
                                             }) => {

    return (
        <div className={styles.profile}>

            <div>
                {(isEditMode &&
                    <div>
                        <input value={nameValue} onChange={onNameValueChange}/>
                        <button onClick={updateName}>apply</button>
                        <button onClick={onEditMode}>cancel</button>
                    </div>) ||

                <div>
                    NAME:
                    {user.name}
                    <button disabled={isFetching} onClick={onEditMode}>change</button>
                </div>}
            </div>

            <div>
                EMAIL:
                {user.email}
            </div>

            <div>
                {(user.avatar &&
                    <img src={user.avatar} alt='avatar'/>) ||
                <div> NO AVATAR </div>}
            </div>

            <div>
                NUMBER OF DECK:
                {user.publicCardPacksCount}
            </div>
        </div>
    )
}
export default Profile
