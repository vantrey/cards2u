import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";

const initialState = {
  isSuccess: false,
  errorMessage: ''
}

export const registrationReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case "REGISTRATION_REDUCER/CREATE_USER_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

const actions = {
  createUserSuccess: (isSuccess: boolean, errorMessage: string) => ({
    type: 'REGISTRATION_REDUCER/CREATE_USER_SUCCESS',
    isSuccess,
    errorMessage
  } as const)
}
type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const createUser = (email: string, password: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    const result = await api.registration(email, password)
    console.log(result)
    dispatch(actions.createUserSuccess(result.data.success, ''))
  } catch (e) {
    dispatch(actions.createUserSuccess(false, e.response.data.error))
    console.log({...e})
  }
}