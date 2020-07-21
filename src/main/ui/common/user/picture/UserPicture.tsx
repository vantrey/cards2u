import React from 'react';
import styles from './UserPicture.module.css';
import avaDefault from "../../../images/ava-default.png";

type AvaPictureTypeProps={
    avatar:string,
    nick:string
}


const UserPicture: React.FC<AvaPictureTypeProps> = ({avatar,nick}) => {
    return (
        <div className={styles.picture__wrap}>
            <div className={styles.picture__avatar}>
                {
                    avatar &&
					<img src={avatar} alt='avatar'/>
                }
                {
                    !avatar &&
					<img src={avaDefault} alt='avatar'/>
                }
            </div>
            <div className={styles.picture__nick}>
                {
                    nick &&
					<span>{nick}</span>
                }
                {
                    !nick &&
					<span>John Wick</span>
                }
            </div>
        </div>
    );
};

export default UserPicture