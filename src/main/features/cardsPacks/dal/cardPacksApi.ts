import axios from 'axios'
import {CardPackType} from "../../../types/entities";


const instance = axios.create({
  baseURL: "https://cards-nya-back.herokuapp.com/1.0/cards/pack"
})


type GetPacksType = {
  cardPacks: Array<CardPackType>
  cardPacksTotalCount: number // количество колод
  maxGrade: number
  minGrade: number
  page: number // выбранная страница
  pageCount: number // количество элементов на странице
  token: string
  tokenDeathTime: number
}
type CreateCardPackType = {
  newCardsPack: CardPackType
  success: boolean
  token: string
  tokenDeathTime: number
}
type DelCardPackType = {
  deletedCardsPack: CardPackType
  success: boolean
  token: string
  tokenDeathTime: number
}
type UpdateCardPackType = {
  updatedCardsPack: CardPackType
  success: boolean
  token: string
  tokenDeathTime: number
}

export const cardPacksApi = {
  getPacks(token: string | null, currentPage: number|null, pageSize: number|null,user_id:string|null) {
    return instance.get<GetPacksType>(
      `?token=${token}&page=${currentPage}&pageCount=${pageSize}&user_id=${user_id}`
    )
  },
  createCardsPack(token: string | null, cardsPack: { name: string, user_id: string | null }) {
    return instance.post<CreateCardPackType>(
      ``,
      {
        cardsPack,
        token
      })
  },
  deleteCardsPack(token: string | null, cardsPackId: string) {
    return instance.delete<DelCardPackType>(
      `?token=${token}&id=${cardsPackId}`
    )
  },
  updateCardsPack(token: string | null, cardsPack: { cardsPackId: string }) {
    return instance.put<UpdateCardPackType>(``,
      {
        cardsPack,
        token
      })
  }
}