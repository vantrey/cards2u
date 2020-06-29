import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
import {UserType} from "../../../../../types/entities";
import {useDispatch} from "react-redux";
import {updateUser} from "../../../../../bll/profile/profileReducer";
import ProfileAvatar from "./ProfileAvatar";
import MyEditor from "../avaEditor/AvaEditor";


type ProfilePropsType = {
    user: UserType
    isFetching: boolean
}

const ProfileAvatarContainer: React.FC<ProfilePropsType> = React.memo(({
                                                                           user,
                                                                           isFetching
                                                                       }) => {

    const dispatch = useDispatch();

    const [newAvatar, setNewAvatar] = useState<string | null>(null); // base 64
    const [isShowAvaEditor, setIsShowAvaEditor] = useState(false);

    const inRef = useRef<HTMLInputElement>(null);

    const uploadCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setNewAvatar(reader.result);
                    setIsShowAvaEditor(true);
                }
            };
            reader.readAsDataURL(newFile);
        }
    }, [setNewAvatar, setIsShowAvaEditor]);

    const onChangeClickCallBack = useCallback(() => {
        inRef && inRef.current && inRef.current.click()
    }, [inRef]);

    const updateAvatarCallBack = useCallback((newAvatarScaled: string) => {
        setNewAvatar(newAvatarScaled);
        dispatch(updateUser(user.name, newAvatarScaled));
        setIsShowAvaEditor(false);
    }, [user.name, newAvatar]);

    const cancelAvaEditor = useCallback(() => {
        setNewAvatar(user.avatar);
        setIsShowAvaEditor(false);
    }, [setIsShowAvaEditor]);


    return (
        <>
            <ProfileAvatar
                upload={uploadCallback}
                inRef={inRef}
                newAvatar={newAvatar}
                onChangeClick={onChangeClickCallBack}
                updateAvatar={updateAvatarCallBack}
                user={user}
                isFetching={isFetching}
                isShowAvaEditor={isShowAvaEditor}
                cancelAvaEditor={cancelAvaEditor}
            />
        </>
    )
});






export default ProfileAvatarContainer;

