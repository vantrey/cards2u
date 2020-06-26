import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
import {UserType} from "../../../../../types/entities";
import {useDispatch} from "react-redux";
import {updateUser} from "../../bll/profileReducer";
import ProfileAvatar from "./ProfileAvatar";
import AvatarEditor from 'react-avatar-editor'

type ProfilePropsType = {
    user: UserType
    isFetching: boolean
}

const ProfileAvatarContainer: React.FC<ProfilePropsType> = React.memo(({
                                                                           user,
                                                                           isFetching
                                                                       }) => {

    const dispatch = useDispatch();

    const [newAvatar, setNewAvatar] = useState<string | null>(null);
    const [isShowApply, setIsShowApply] = useState(false);


    const inRef = useRef<HTMLInputElement>(null);

    const uploadCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setNewAvatar(reader.result);
                    setIsShowApply(true);
                }
            };
            reader.readAsDataURL(newFile);
        }
    }, [setNewAvatar, setIsShowApply]); // ??


    const onChangeClickCallBack = useCallback(() => {
        inRef && inRef.current && inRef.current.click()
    }, [inRef]);  //??


    const updateAvatarCallBack = useCallback(() => {
        dispatch(updateUser(user.name, newAvatar));
        setIsShowApply(false)
    }, [user.name, newAvatar]); //??


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
                isShowApply={isShowApply}
            />
            {/*<MyEditor
            newAvatar={newAvatar}
            />*/}
        </>
    )
});




type MyEditorPropsType = {
    newAvatar: string | null
}

const MyEditor: React.FC<MyEditorPropsType> = ({newAvatar}) => {

    return (
        <AvatarEditor
            image={newAvatar ? newAvatar : ''}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
        />
    )
};


export default ProfileAvatarContainer;
