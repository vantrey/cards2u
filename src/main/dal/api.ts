import axios from 'axios'
import {UserType} from "../types/entities";

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0",
})

type CommonRequestType = {
    token: string
    tokenDeathTime: number
}

type GetUsersType = {
    users: Array<UserType>
    maxPublicCardPacksCount: number
    minPublicCardPacksCount: number
    page: number
    pageCount: number
    usersTotalCount: number
} & CommonRequestType

type LoginType = {
    email: string
    name: string
    isAdmin: boolean,
    rememberMe: boolean,
    __v: number
    _id: string
    success: boolean
} & CommonRequestType

type RegistrationType = {
    addedUser: {
        email: string
        isAdmin: boolean,
        __v: number,
        _id: string
    },
    success: boolean
}

type UpdateUserType = {
    success: boolean
    updatedUser: UserType
} & CommonRequestType


export const api = {
    getUsers(token: string | null, page: number, pageCount: number) {
        return instance.get<GetUsersType>(
            `/social/users?token=${token}&page=${page}&pageCount=${pageCount}`
        ).then(r => r.data)
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
    updateUser(token: string | null, name: string, avatar: string | null) {
        return instance.put<UpdateUserType>(
            `/auth/me`,
            {
                token,
                name,
                avatar
            })
    },
    getUser(token: string | null, id: string | null) {
        return instance.get<{ user: UserType } & CommonRequestType>(`social/user/?token=${token}&id=${id}`)
    }
}