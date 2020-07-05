import React from 'react';
import styles from './Profile.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store/store";
import ProfileAvatarContainer from "./profileAvatar/ProfileAvatarContainer";
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer';
import {withAuthRedirect} from "../../../../features/hoc/withAuthRedirect";
import FeedbackContainer from "./feedBack/FeedbackContainer";
import Root from '../../root/Root';

const ProfileContainer = () => {

    const {user} = useSelector((state: AppStateType) => state.profile);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    return (
        <>
            <Root/>
            <div className={styles.profile__wrap}>
                <div className={styles.profile__main}>
                    <h5 className={styles.main__title}>Personal Area</h5>
                    <div className={styles.main__wrap}>
                        <div className={styles.main__user}>
                            <div className={styles.user__avatar}>
                                <ProfileAvatarContainer
                                    user={user}
                                    isFetching={isPreventFetching}
                                />
                            </div>
                            <div className={styles.user__nick}>
                                <ProfileInfoContainer
                                    user={user}
                                    isFetching={isPreventFetching}
                                />
                            </div>
                            <div className={styles.user__feedback}>
                                <FeedbackContainer/>
                            </div>
                        </div>
                        <div className={styles.main__rest}>
                            <div className={styles.rest__decks}></div>
                            <div className={styles.rest__chat}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default withAuthRedirect<{}>(ProfileContainer)
