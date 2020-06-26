import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateUser} from "../../bll/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {UserType} from "../../../../../types/entities";

type ProfileInfoContainerPropsType = {
    user: UserType
    isFetching: boolean
}

const ProfileInfoContainer: React.FC<ProfileInfoContainerPropsType> = ({
                                                                           user,
                                                                           isFetching
                                                                       }) => {

    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState<string>(user.name);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);


    useEffect(() => {
        setNameValue(user.name)
    }, [user.name]);

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
                 <ProfileInfo
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
export default ProfileInfoContainer
