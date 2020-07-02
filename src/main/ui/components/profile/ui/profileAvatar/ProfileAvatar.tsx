import React from 'react';
import {UserType} from "../../../../../types/entities";
import styles from './ProfileAvatar.module.css';
import avaDefault from '../../../../images/ava-default.png';
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
        <div className={styles.editor__wrap}>
            {!isShowAvaEditor &&
			<div className={styles.editor__imgBlock}>
				<div className={styles.imgBlock}>
                    {(newAvatar && !isShowAvaEditor &&

						<div className={styles.avatar__base64}>
							<img src={newAvatar} alt='avatar'/>
						</div>) ||

                    (user.avatar &&
						<div className={styles.avatar__user}>
							<img src={user.avatar} alt='avatar'/>
						</div>) ||

                    (<div className={styles.avatar__default}>
						<img src={avaDefault} alt='avatar'/>
					</div>)}
				</div>
				<div className={styles.avatar__button}>
                    {!isShowAvaEditor &&
					<button className={styles.button__change}
							disabled={isFetching}
							onClick={onChangeClick}
					>change
					</button>}
				</div>
				<div className={styles.avatar__input}>
					<input
						ref={inRef}
						type='file'
						accept=".jpg, .jpeg, .png"
						onChange={upload}
						style={{display: 'none'}}
					/>
				</div>
			</div>
            }
            {isShowAvaEditor &&
			<AvaEditor
				cancelAvaEditor={cancelAvaEditor}
				updateAvatar={updateAvatar}
				newAvatar={newAvatar}
			/>
            }
        </div>

    )
});
export default ProfileAvatar
