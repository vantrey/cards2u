import React, {useEffect} from 'react';
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store/store";
import {getUser} from "../bll/profileReducer";
import ProfileAvatarContainer from "./profileAvatar/ProfileAvatarContainer";
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer';
import {withAuthRedirect} from "../../../../features/hoc/withAuthRedirect";

const ProfileContainer = () => {

    const {user, isFetching} = useSelector((state: AppStateType) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);


    return (
        <div className={styles.profile__wrap}>
            <div className={styles.profile__main}>

                <div className={styles.main__body}>

                    <ProfileAvatarContainer
                        user={user}
                        isFetching={isFetching}
                    />

                    <ProfileInfoContainer
                        user={user}
                        isFetching={isFetching}
                    />
                </div>
            </div>
        </div>
    )
};
export default withAuthRedirect<{}>(ProfileContainer)
