import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store/store";
import {getUser, updateUser} from "./profileReducer";

const ProfileContainer = () => {

    const {user} = useSelector((state: AppStateType) => state.profile);
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState<string>(user.name)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getUser())
    }, []);

    useEffect(() => {
        setNameValue(user.name)
    },[user])

    const onEditMode = () => {
        setIsEditMode(!isEditMode)
    }

    const onNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value)
    }

    const updateName = () => {
        dispatch(updateUser(nameValue))
        setIsEditMode(false)
    }

    return (
        <div className={styles.profile}>
            {isEditMode &&
            <div>
                <input value={nameValue} onChange={onNameValueChange}/>
                <button onClick={updateName}>apply</button>
            </div>
            }
            <div>
                NAME:
                {user.name}
                <button onClick={onEditMode}>change</button>
            </div>
            <div>
                EMAIL:
                {user.email}
            </div>
            <div>
                {(user.avatar &&
                    <img src={user.avatar} alt='avatar'/>) ||
                <div> NO AVATAR </div>
                }

            </div>
        </div>
    )
}
export default ProfileContainer
