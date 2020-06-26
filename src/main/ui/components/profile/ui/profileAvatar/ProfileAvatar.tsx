import React from 'react';
import {UserType} from "../../../../../types/entities";
import styles from "../Profile.module.css"

type ProfilePropsType = {
    user: UserType
    inRef: React.RefObject<HTMLInputElement>
    upload: (e: React.ChangeEvent<HTMLInputElement>) => void
    newAvatar: string | null
    updateAvatar: () => void
    onChangeClick: () => void
    isFetching: boolean
}

const ProfileAvatar: React.FC<ProfilePropsType> = ({
                                                       user,
                                                       inRef,
                                                       upload,
                                                       newAvatar,
                                                       updateAvatar,
                                                       onChangeClick,
                                                       isFetching
                                                   }) => {

    return (

        <div className={styles.body__avatarWrap}>

            <div className={styles.avatarWrap__avatar}>
                {(newAvatar &&
                    <div style={{width: '50px', height: '50px'}}>
                        <img src={newAvatar ? newAvatar : undefined}/>
                        <button onClick={updateAvatar}>apply</button>
                    </div>) ||
                (user.avatar &&
                    <div className={styles.avatar__avatarImg}>
                        <img src={user.avatar} alt='avatar'/>
                    </div>) ||
                <div className={styles.avatar__avatarNoImg}>
                    NO AVATAR
                </div>}
                <div className={styles.avatarWrap__setNewAvatar}>
                    <button onClick={onChangeClick}>Change</button>
                </div>
            </div>

            <div>
                <input
                    ref={inRef}
                    type='file'
                    accept=".jpg, .jpeg, .png"
                    onChange={upload}
                    style={{display: 'none'}}
                />
            </div>


        </div>

    )
}
export default ProfileAvatar
