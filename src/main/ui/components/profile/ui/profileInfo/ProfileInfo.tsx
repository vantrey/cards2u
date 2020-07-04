import React from 'react';
import {UserType} from "../../../../../types/entities";
import styles from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    onEditMode: () => void
    nameValue: string
    onNameValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isEditMode: boolean
    updateName: () => void
    user: UserType
    isFetching: boolean
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({
                                                                    onEditMode,
                                                                    isEditMode,
                                                                    nameValue,
                                                                    onNameValueChange,
                                                                    updateName,
                                                                    user,
                                                                    isFetching,
                                                                }) => {

    return (
        <div className={styles.user__info}>
            <div className={styles.setName__wrap}>
                {(isEditMode &&
                    <div className={styles.info__item}>
                        <div className={styles.item__setName}>
                            <input
                                value={nameValue}
                                onChange={onNameValueChange}
                            />
                            <div className={styles.setName__buttons}>
                                <button disabled={!nameValue} onClick={updateName}>apply</button>
                                <button onClick={onEditMode}>cancel</button>
                            </div>
                        </div>
                    </div>)
                ||
                <div className={styles.info__item}>
                    <div className={styles.item__name}>Name:&nbsp;&nbsp;{user.name}</div>
                    <div className={styles.setName__buttons}>
                        <button disabled={isFetching} onClick={onEditMode}>change</button>
                    </div>
                </div>}
            </div>
            <div className={styles.info__item}>
                <div className={styles.item__email}>Email:&nbsp;&nbsp;{user.email}</div>
            </div>
        </div>
    )
});
export default ProfileInfo
