import React from "react";
import Link from "../../../ui/common/Link/Link";
import {CARDS_PATH} from "../../../ui/components/routes/Routes";

type CardPackType = {
    name: string
    grade: number
    id: string
    deletedPacksCards:(cardsPackId:string)=>void
    cardsPackId:string
}

const CardPack: React.FC<CardPackType> = (props) => {

    return (
        <>
            <td> {props.name} </td>
            <td> {props.grade} </td>
            <td><Link title={'cards'} path={`${CARDS_PATH}/${props.id}`}/>
                { props.cardsPackId ?
                    <button onClick={()=>props.deletedPacksCards(props.id)}>del</button>
                    :''
                }
                </td>

        </>
    )
}

export default CardPack