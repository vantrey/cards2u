import axios from 'axios';
import {CardsType, CardType} from "../../../types/entities";


const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0",
})

type GetCardsType = {
    cards: Array<CardsType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}


type AddCardType = {
    newCard:object
    success: boolean,
    token: string
    tokenDeathTime: number
}


export const CardsApi = {
    getCards(cardsPack_id: string, token: string) {
        return instance.get<GetCardsType>(`cards/card?cardsPack_id=${cardsPack_id}&token=${token}`)
    },

    addCard(card:{cardsPack_id: string}, token: string) {
        return instance.post<AddCardType>(`cards/card`,
        {
            card,
            token
        }
    )

    }

}