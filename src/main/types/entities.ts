import {useForm} from "react-hook-form";

export type UserType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    updated: string
    verified: boolean
    _id: string
};

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    created: string
    updated: string
    __v: number
    _id: string
    user_id: string
}


export type CardPackType = {
    cardsCount: number
    private: boolean
    _id: string
    user_id: string
    user_name: string
    name: string
    path: string // папка
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}

export type AddCardType = {
    cardsPack_id: string
    question: string,
    answer: string
}
export type UpdateCardType = {
    _id: string,
    answer: string,
    question: string
}
export type NewCardGradeType = {
    _id: string
    grade: number
    shots: number
}

type UserFavoriteDeckType = {
    favoriteDeckId: string
    deckName: string
    deck: Array<CardType>
}

export type UserFavoriteDecksType = {
    userId: string
    favoriteDecks: Array<UserFavoriteDeckType>
}

export type UseFormRegisterType = ReturnType<typeof useForm>['register']
export type UseFormErrorsType = ReturnType<typeof useForm>['errors']