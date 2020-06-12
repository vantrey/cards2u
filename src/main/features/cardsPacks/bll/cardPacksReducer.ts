import {AppStateType, InferActionTypes} from '../../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../../types/entities";
import {cardPacksApi} from "../dal/cardPacksApi";
import {repository} from "../../../helpers/repos_localStorage/Token";

type InitialStateType = {
    cardPacks: Array<CardPackType>
    isFetching: boolean
    errorFromServer: string
    pageSize: number
    totalCardPacksCount: number
}

const initialState: InitialStateType = {
    cardPacks: [],
    isFetching: false,
    errorFromServer: '',
    pageSize: 6,
    totalCardPacksCount: 0,
}

export const cardPacksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CARD_PACKS_REDUCER/GET_CARD_PACKS":
            return {
                ...state,
                cardPacks: action.cardPacks,
                isFetching: false,
                totalCardPacksCount: action.totalCardPacksCount
            }
        case "CARD_PACKS_REDUCER/CREATE_CARD_PACKS":
            return {
                ...state,
                cardPacks: [...state.cardPacks, action.newCardPack],
                isFetching: false
            }
        case "CARD_PACKS_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "CARD_PACKS_REDUCER/SET_ERROR":
            return {
                ...state,
                errorFromServer: action.error,
                isFetching: false
            }
        default:
            return state
    }
}

export const cardPacksActions = {
    getCardPacksSuccess: (cardPacks: Array<CardPackType>, totalCardPacksCount: number) => ({
        type: 'CARD_PACKS_REDUCER/GET_CARD_PACKS',
        cardPacks,
        totalCardPacksCount
    } as const),
    createCardPacksSuccess: (newCardPack: CardPackType) => ({
        type: 'CARD_PACKS_REDUCER/CREATE_CARD_PACKS',
        newCardPack
    } as const),
    setIsFetching: (isFetching: boolean) => ({
        type: 'CARD_PACKS_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),
    setError: (error: string) => ({
        type: 'CARD_PACKS_REDUCER/SET_ERROR',
        error
    } as const)
}

type ActionsType = InferActionTypes<typeof cardPacksActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getCardPacks = (currentPage: number, pageSize: number): ThunkType => async (dispatch: DispatchType) => {
    try {
        dispatch(cardPacksActions.setIsFetching(true))
        let token = repository.getToken()
        const response = await cardPacksApi.getPacks(token, currentPage, pageSize)
        dispatch(cardPacksActions.getCardPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount))
        repository.saveToken(response.data.token, response.data.tokenDeathTime)
    } catch (e) {
        dispatch(cardPacksActions.setError(e.response.data.error))
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
    }
}
export const createCardPack = (newCardPack: { name: string }): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
    try {
        dispatch(cardPacksActions.setIsFetching(true))
        let token = repository.getToken()
        let user_id = repository.get_Auth_id()
        const response = await cardPacksApi.createCardPack(token, {...newCardPack, user_id})
        dispatch(cardPacksActions.createCardPacksSuccess(response.data.newCardsPack))
        repository.saveToken(response.data.token, response.data.tokenDeathTime)
    } catch (e) {
        dispatch(cardPacksActions.setError(e.response.data.error))
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
    }
}