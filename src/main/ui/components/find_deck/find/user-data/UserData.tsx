import React from "react";
import UserDecks from "./user-decks/UserDecks";


type UserDecsType = {
    avatar: string,
    name: string,
    decks: number
    id: string,
    onShowDecks:(e: React.MouseEvent<HTMLDivElement>)=>void
    showMode:string
}

const UserData: React.FC<UserDecsType> = ({
                                              avatar,
                                              name,
                                              decks,
                                              id,
                                              onShowDecks,
                                              showMode
                                          }) => {

    return (

        <>
            <div>avatar:{/*<img src={avatar}/>*/}</div>
            <div>nick:{name} </div>
            <div id={id} onClick={onShowDecks}>decks:{decks} </div>
            {showMode === id &&
            <div>
                <UserDecks id={id}/>
            </div>
            }
        </>

    )


}
export default UserData