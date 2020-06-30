import React from 'react';
import {UserType} from "../../../../../types/entities";
import styles from "../Profile.module.css"
import AvaEditor from "../avaEditor/AvaEditor";

type ProfilePropsType = {
    user: UserType
    inRef: React.RefObject<HTMLInputElement>
    upload: (e: React.ChangeEvent<HTMLInputElement>) => void
    newAvatar: string | null
    updateAvatar: (newAvatarScaled: string) => void
    onChangeClick: () => void
    isFetching: boolean
    isShowAvaEditor: boolean
    cancelAvaEditor: () => void
}

const ProfileAvatar: React.FC<ProfilePropsType> = React.memo(({
                                                                  user,
                                                                  inRef,
                                                                  upload,
                                                                  newAvatar,
                                                                  updateAvatar,
                                                                  onChangeClick,
                                                                  isFetching,
                                                                  isShowAvaEditor,
                                                                  cancelAvaEditor,
                                                              }) => {

    return (

        <div className={styles.body__avatarWrap}>

            <div className={styles.avatarWrap__avatar}>
                {(newAvatar && !isShowAvaEditor &&

                    <div className={styles.avatar__avatarImg}>
                        <img alt='avatar' src={newAvatar ? newAvatar : undefined}/>
                    </div>) ||

                (isShowAvaEditor &&
                    <div className={styles.avatarImg__apply}>
                        <AvaEditor
                            cancelAvaEditor={cancelAvaEditor}
                            updateAvatar={updateAvatar}
                            newAvatar={newAvatar}
                        />

                    </div>) ||

                (user.avatar &&
                    <div className={styles.avatar__avatarImg}>
                        <img src={user.avatar} alt='avatar'/>
                    </div>) ||

                <div className={styles.avatar__avatarNoImg}>
                    NO AVATAR
                </div>}

                <div className={styles.avatarWrap__setNewAvatar}>

                    { !isShowAvaEditor &&
                        <button
                            disabled={isFetching}
                            onClick={onChangeClick}
                        >Change
                        </button>}
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
});
export default ProfileAvatar
