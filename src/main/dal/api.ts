import axios from 'axios'
import {UserType} from "../types/entities";

const instance = axios.create({
  baseURL: "https://cards-nya-back.herokuapp.com/1.0",
})

type GetUsersType = {
  users: Array<UserType>
  maxPublicCardPacksCount: number
  minPublicCardPacksCount: number
  page: number
  pageCount: number
  token: string
  tokenDeathTime: number
  usersTotalCount: number
}
type LoginType = {
  email: string
  name: string
  isAdmin: boolean,
  rememberMe: boolean,
  token: string
  tokenDeathTime: number
  __v: number
  _id: string
  success: boolean
}
type RegistrationType = {
  addedUser: {
    email: string
    isAdmin: boolean,
    __v: number,
    _id: string
  },
  success: boolean
}
type UpdateNameType = {
  success: boolean
  token: string
  tokenDeathTime: number
  updatedUser: UserType
}

  export const api = {
  getUsers(token:string | null, page: number|null, pageCount: number|null) {
    return instance.get<GetUsersType>(
      `/social/users?token=${token}&page=${page}&pageCount=${pageCount}`
    ).then(r=>r.data)
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post<LoginType>(
      `/auth/login`,
      {
        email,
        password,
        rememberMe
      })
  },
  logout() {
    return instance.delete<LoginType>(`/auth/login`)
  },
  registration(email: string, password: string) {
    return instance.post<RegistrationType>(
      `/auth/register`,
      {
        email,
        password
      })
  },
  restorePsw(email: string, html1: string, html2: string) {
    return instance.post<{ success: boolean }>(
      `/auth/forgot`,
      {
        email,
        html1,
        html2
      })
  },
  authMe(token: string) {
    return instance.post<LoginType>(
      `/auth/me`,
      {
        token
      })
  },
  setNewPsw(resetPasswordToken: string, password: string) {
    return instance.post<{ success: boolean }>(
      `/auth/set-new-password`,
      {
        resetPasswordToken,
        password
      })
  },
  updateName(token: string | null, name: string, avatar: string) {
    return instance.put<UpdateNameType>(
      `/auth/me`,
      {
        token,
        name,
        avatar
      })
  },
}