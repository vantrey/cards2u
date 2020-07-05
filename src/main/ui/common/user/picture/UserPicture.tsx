import React from 'react';
import styles from './UserPicture.module.css';

type AvaPictureTypeProps={
    avatar:string,
    nick:string
}


const UserPicture: React.FC<AvaPictureTypeProps> = ({avatar,nick}) => {
    return (
        <div className={styles.picture__wrap}>
            <div className={styles.picture__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={styles.picture__nick}>
                {nick}
            </div>
        </div>
    );
};

export default UserPicture