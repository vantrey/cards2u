import {AppStateType, InferActionTypes} from '../../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../../types/entities";
import {cardPacksApi} from "../dal/cardPacksApi";
import {repository} from "../../../helpers/repos_localStorrage/Token";

type InitialStateType = {
  cardPacks: Array<CardPackType>
  isFetching: boolean
  error: string
  currentPage: number
  pageSize: number
  totalCardPacksCount: number
}

const initialState: InitialStateType = {
  cardPacks: [],
  isFetching: false,
  error: '',
  currentPage: 1,
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
    case "CARD_PACKS_REDUCER/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage
      }
    case "CARD_PACKS_REDUCER/SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      }
    case "CARD_PACKS_REDUCER/SET_ERROR":
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    default:
      return state
  }
}

const cardPacksActions = {
  getCardPacksSuccess: (cardPacks: Array<CardPackType>, totalCardPacksCount: number) => ({
    type: 'CARD_PACKS_REDUCER/GET_CARD_PACKS',
    cardPacks,
    totalCardPacksCount
  } as const),
  createCardPacksSuccess: (newCardPack: CardPackType) => ({
    type: 'CARD_PACKS_REDUCER/CREATE_CARD_PACKS',
    newCardPack
  } as const),
  setCurrentPage: (currentPage: number) => ({
    type: 'CARD_PACKS_REDUCER/SET_CURRENT_PAGE',
    currentPage
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

export const getCardPacks = (pageNumber: number, pageSize: number): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(cardPacksActions.setIsFetching(true))
    dispatch(cardPacksActions.setCurrentPage(pageNumber))
    let token = repository.getToken()
    if (!token) token = ''
    const response = await cardPacksApi.getPacks(token, pageNumber, pageSize)
    dispatch(cardPacksActions.getCardPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount))
    repository.saveToken(response.data.token, response.data.tokenDeathTime)
  } catch (e) {
    dispatch(cardPacksActions.setError(e.response.data.error))
  }
}
export const createCardPack = (newCardPack: { name: string }): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
  try {
    debugger
    dispatch(cardPacksActions.setIsFetching(true))
    let token = repository.getToken()
    let user_id = getState().login._id
    if (!token) token = ''
    const response = await cardPacksApi.createCardPack(token, {...newCardPack, user_id})
    dispatch(cardPacksActions.createCardPacksSuccess(response.data.newCardsPack))
    repository.saveToken(response.data.token, response.data.tokenDeathTime)
  } catch (e) {
    dispatch(cardPacksActions.setError(e.response.data.error))
  }
}