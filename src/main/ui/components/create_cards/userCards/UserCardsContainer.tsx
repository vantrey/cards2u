import React from 'react';
import styles from '../Create.module.css'
import UserCards from "./UserCards";

type PropsType = {}


const UserCardsContainer: React.FC<PropsType> = React.memo(({}) => {



    return (
        <div>

            <UserCards/>

        </div>
    )
});
export default UserCardsContainer;