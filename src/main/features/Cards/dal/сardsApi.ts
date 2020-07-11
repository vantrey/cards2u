import axios from 'axios';
import {AddCardType, CardType, NewCardGradeType, UpdateCardType} from "../../../types/entities";


const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/cards/card",
})

type GetCardsType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
    sortCards:string
}
type CommonResponseType = {
    success: boolean
    token: string
    tokenDeathTime: number
}

type AddCardResponseType = {
    newCard: CardType
} & CommonResponseType

type DelCardResponseType = {
    deletedCard: CardType
} & CommonResponseType

type UpdCardResponseType = {
    updatedCard: CardType
} & CommonResponseType


export const cardsApi = {
    getCards(cardsPack_id: string, token: string | null,sortCards:string) {
        return instance.get<GetCardsType>(`?cardsPack_id=${cardsPack_id}&token=${token}&sortCards=${sortCards}&pageCount=${100}`)
    },

    addCard(card: AddCardType, token: string | null) {
        return instance.post<AddCardResponseType>(``,
            {
                card,
                token
            }
        )

    },
    deleteCard(id: string, token: string | null) {
        return instance.delete<DelCardResponseType>(`?token=${token}&id=${id}`)

    },
    updateCard(card: UpdateCardType | NewCardGradeType, token: string | null) {
        return instance.put<UpdCardResponseType>(``,
            {
                card,
                token
            }
        )
    },
}