import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";

const initialState = {
  isSuccess: false,
  errorServerMessage: '',
  isFetching: false
}

export const registrationReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case "REGISTRATION_REDUCER/CREATE_USER_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess,
        errorServerMessage: action.errorServerMessage
      }
    case "REGISTRATION_REDUCER/IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      }
    case "REGISTRATION_REDUCER/SET_IS_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess
      }
    default:
      return state
  }
}

export const actions = {
  createUserSuccess: (isSuccess: boolean, errorServerMessage: string) => ({
    type: 'REGISTRATION_REDUCER/CREATE_USER_SUCCESS',
    isSuccess,
    errorServerMessage
  } as const),
  setIsFetching: (isFetching: boolean) => ({
    type: 'REGISTRATION_REDUCER/IS_FETCHING',
    isFetching
  } as const),
  setIsRegistrationSuccess: (isSuccess: boolean) => ({
    type: 'REGISTRATION_REDUCER/SET_IS_SUCCESS',
      isSuccess
  } as const)
}

type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const createUser = (email: string, password: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(actions.setIsFetching(true))
    const response = await api.registration(email, password)
    dispatch(actions.createUserSuccess(response.data.success, ''))
    dispatch(actions.setIsFetching(false))
  } catch (e) {
    dispatch(actions.createUserSuccess(false, e.response.data.error))
    dispatch(actions.setIsFetching(false))
  }
}