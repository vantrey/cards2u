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

export const cardPacksApi = {
  getPacks(token: string, currentPage: number, pageCount: number) {
    return instance.get<GetPacksType>(
      `?token=${token}&page=${currentPage}&pageCount=${pageCount}`
    )
  },
  createCardPack(token: string, cardsPack: {name: string, user_id: string} ) {
    return instance.post<CreateCardPackType>(
      ``,
      {
        cardsPack,
        token
      })
  }
}