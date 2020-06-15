import axios from 'axios';
import {CardType} from "../../../types/entities";


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
}


/*type AddCardType = {
    newCard: CardType
    success: boolean,
    token: string
    tokenDeathTime: number
}

type DeleteCardType = {
    deletedCard: CardType
    success: boolean
    token: string
    tokenDeathTime: number
}

type UpdateCardType = {
    updatedCard: CardType
    success: boolean
    token: string
    tokenDeathTime: number

}*/

type AddPostDeleteResponseType = {
    Card: CardType
    success: boolean
    token: string
    tokenDeathTime: number
}
export const cardsApi = {
    getCards(cardsPack_id: string, token: string | null) {
        return instance.get<GetCardsType>(`?cardsPack_id=${cardsPack_id}&token=${token}`)
    },

    addCard(card: { cardsPack_id: string }, token: string | null) {
        return instance.post<AddPostDeleteResponseType>(``,
            {
                card,
                token
            }
        )

    },
    deleteCard(id: string, token: string | null) {
        return instance.delete<AddPostDeleteResponseType>(`?token=${token}&id=${id}`)

    },
    updateCard(card: { _id: string, answer: string }, token: string | null) {
        return instance.put<AddPostDeleteResponseType>(``,
            {
                card,
                token
            }
        )
    },
    setGradeCard(newGradeCard: { _id: string, grade: number, shots: number }, token: string | null) {
        return instance.put<AddPostDeleteResponseType>(``,
          {
              newGradeCard,
              token
          }
        )
    },
}