import React from 'react';
import {UserType} from "../../../../../types/entities";
import styles from '../Profile.module.css'

type ProfileInfoPropsType = {
    onEditMode: () => void
    nameValue: string
    onNameValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isEditMode: boolean
    updateName: () => void
    user: UserType
    isFetching: boolean
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         onEditMode,
                                                         isEditMode,
                                                         nameValue,
                                                         onNameValueChange,
                                                         updateName,
                                                         user,
                                                         isFetching,
                                                     }) => {

    return (

        <div className={styles.body__infoWrap}>
            <div className={styles.infoWrap__info}>
                {(isEditMode &&
                    <div className={styles.info__item}>
                        <div className={styles.item__setNewName}>
                            <input
                                value={nameValue}
                                onChange={onNameValueChange}
                            />
                            <button
                                disabled={nameValue === user.name}
                                onClick={updateName}
                            >
                                apply
                            </button>

                            <button
                                onClick={onEditMode}
                            >
                                cancel
                            </button>
                        </div>
                    </div>)
                ||
                <div className={styles.info__item}>
                    <div className={styles.item__name}>NAME:
                        {user.name}
                        <button disabled={isFetching} onClick={onEditMode}>change</button>
                    </div>
                </div>}
            </div>

            <div className={styles.info__item}>
                <div className={styles.item__email}>EMAIL:
                    {user.email}
                </div>
            </div>

            <div className={styles.info__item}>
                <div className={styles.item__decksCount}>
                    NUMBER OF DECK:
                    {user.publicCardPacksCount}</div>
            </div>
        </div>
    )
}
export default ProfileInfo
