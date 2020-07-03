import React from "react";
import style from './SaveDeck.module.css'
import {CardType} from "../../../types/entities";
import Deck_blue from "./deck/Deck_blue";
import Deck_green from "./deck/Deck_green";
import Deck_green2 from "./deck/Deck_green2";
import Deck_red from "./deck/Deck_red";
import Deck_Yellow from "./deck/Deck_yellow";


type SaveDeckPropsType = {
    cardsPackId:string
    isFetching: boolean
    cards: Array<CardType>
}

const SaveDeck: React.FC<SaveDeckPropsType> = ({cards}) => {

    return (
        <div className={style.save_deck_container}>
            <div className={style.deck}>
               <Deck_blue/>
               <Deck_green/>
               <Deck_green2/>
               <Deck_red/>
               <Deck_Yellow/>
            </div>
            <div>
                <button className={style.come_save_button}>Come Back</button>
                <button className={style.come_save_button}>Save Deck</button>
            </div>
            <div className={style.get_cards_users}>
                <table className="table">
                    <thead>
                    <tr>
                        <th >
                            grade
                        </th>
                        <th>
                            question

                        </th>
                        <th>
                            answer
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cards.map(u => (
                        <tr key={u._id}>
                            <td>{u.grade}</td>
                            <td>{u.question}</td>
                            <td>{u.answer}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SaveDeck