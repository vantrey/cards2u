import {AppStateType, InferActionTypes} from '../../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../../types/entities";
import {cardPacksApi} from "../dal/cardPacksApi";
import {repository} from "../../../helpers/repos_localStorrage/Token";

type InitialStateType = {
  cardPacks: Array<CardPackType>
  isFetching: boolean
  error: string
}

const initialState: InitialStateType = {
  cardPacks: [],
  isFetching: false,
  error: ''
}

export const cardPacksReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "CARD_PACKS_REDUCER/GET_CARD_PACKS":
      return {
        ...state,
        cardPacks: action.cardPacks,
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
        error: action.error
      }
    default:
      return state
  }
}

const cardPacksActions = {
  getCardPacksSuccess: (cardPacks: Array<CardPackType>) => ({
    type: 'CARD_PACKS_REDUCER/GET_CARD_PACKS',
    cardPacks
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

export const getCardPacks = (token: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(cardPacksActions.setIsFetching(true))
    const response = await cardPacksApi.getPacks(token)
    dispatch(cardPacksActions.getCardPacksSuccess(response.data.cardPacks))
    repository.saveToken(response.data.token, response.data.tokenDeathTime)
  } catch (e) {
    dispatch(cardPacksActions.setError(e.response.data.error))
  }
}