import axios from 'axios'
import {CardPackType} from "../../../types/entities";


const instance = axios.create({
  baseURL: "https://cards-nya-back.herokuapp.com/1.0/cards/pack/"
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

export const cardPacksApi = {
  getPacks(token: string) {
    return instance.get<GetPacksType>(
      `?token=${token}`
    )
  },
  
}