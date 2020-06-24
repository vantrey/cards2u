import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getUser, updateUser} from "../bll/profileReducer";
import Profile from "./Profile";

const ProfileContainer = () => {

    const {user, isFetching} = useSelector((state: AppStateType) => state.profile);
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState<string>(user.name);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    useEffect(() => {
        setNameValue(user.name)
    }, [user]);

    const onEditMode = () => {
        setIsEditMode(!isEditMode)
    };

    const onNameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value)
    };

    const updateName = () => {
        dispatch(updateUser(nameValue));
        setIsEditMode(false)
    };

    return (
        <Profile
            user={user}
            isEditMode={isEditMode}
            nameValue={nameValue}
            onEditMode={onEditMode}
            onNameValueChange={onNameValueChange}
            updateName={updateName}
            isFetching={isFetching}
        />
    )
};
export default ProfileContainer
