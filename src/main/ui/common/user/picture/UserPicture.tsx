import React from 'react';

type AvaPictureTypeProps={
    avatar:string,
    nick:string
}


const UserPicture: React.FC<AvaPictureTypeProps> = ({avatar,nick}) => {
    return (
        <div>
            <div >
                Avatar:<img src={avatar}/>
            </div>
            <div>
                Nick:{nick}
            </div>
        </div>
    );
};

export default UserPicture