import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateUser} from "../../../../../bll/profile/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {UserType} from "../../../../../types/entities";

type ProfileInfoContainerPropsType = {
    user: UserType
    isFetching: boolean
}

const ProfileInfoContainer: React.FC<ProfileInfoContainerPropsType> = React.memo(({
                                                                                      user,
                                                                                      isFetching
                                                                                  }) => {

    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState<string>('');
    const [isEditMode, setIsEditMode] = useState<boolean>(false);


    useEffect(() => {
        setNameValue(user.name)
    }, [user.name]);

    const onEditModeCallBack = useCallback(() => {
        setIsEditMode(!isEditMode);
        setNameValue('')
    }, [setIsEditMode, isEditMode]);

    const onNameValueChangeUseCallBack = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value)
    }, [setNameValue]);

    const updateNameCAllBack = useCallback(() => {
        dispatch(updateUser(nameValue));
        setIsEditMode(false);
    }, [dispatch, nameValue, setIsEditMode]);

    return (
        <ProfileInfo
            user={user}
            isEditMode={isEditMode}
            nameValue={nameValue}
            onEditMode={onEditModeCallBack}
            onNameValueChange={onNameValueChangeUseCallBack}
            updateName={updateNameCAllBack}
            isFetching={isFetching}
        />
    )
});
export default ProfileInfoContainer
