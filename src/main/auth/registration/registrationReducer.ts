import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
  isSuccess: false,
  errorServerMessage: '',
  isRegisterFetching: false
};

export const registrationReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {

    case "REGISTRATION_REDUCER/CREATE_USER_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess,
        errorServerMessage: action.errorServerMessage
      };

    case "REGISTRATION_REDUCER/SET_IS_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess
      };

    case "REGISTRATION_REDUCER/SET_IS_FETCHING":
      return {
        ...state,
        isRegisterFetching: action.isFetching
      };

    default:
      return state
  }
};

export const registerActions = {

  createUserSuccess: (isSuccess: boolean, errorServerMessage: string) => ({
    type: 'REGISTRATION_REDUCER/CREATE_USER_SUCCESS',
    isSuccess,
    errorServerMessage
  } as const),

  setIsRegistrationSuccess: (isSuccess: boolean) => ({
    type: 'REGISTRATION_REDUCER/SET_IS_SUCCESS',
      isSuccess
  } as const),

  setIsFetching: (isFetching: boolean) => ({
    type: 'REGISTRATION_REDUCER/SET_IS_FETCHING',
    isFetching
  } as const),
};

type ActionsType = InferActionTypes<typeof registerActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const createUser = (email: string, password: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(setIsPreventFetching(true));
    dispatch(registerActions.setIsFetching(true));
    const response = await api.registration(email, password);
    dispatch(registerActions.createUserSuccess(response.data.success, ''));
    dispatch(registerActions.setIsFetching(false));
    dispatch(setIsPreventFetching(false));
  } catch (e) {
    dispatch(registerActions.createUserSuccess(false, e.response.data.error));
    dispatch(registerActions.setIsFetching(false));
    dispatch(setIsPreventFetching(false));
  }
};