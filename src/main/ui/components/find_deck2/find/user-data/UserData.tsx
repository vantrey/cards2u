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
const styles = {
    margin: 10
}
    return (

        <>
            <div style={styles}>avatar:{/*<img src={avatar}/>*/}</div>
            <div style={styles}>nick:{name} </div>
            <div style={styles} id={id} onClick={onShowDecks}>decks:{decks} </div>
            {showMode === id &&
            <div style={styles}>
                <UserDecks id={id}/>
            </div>
            }
        </>

    )


}
export default UserData