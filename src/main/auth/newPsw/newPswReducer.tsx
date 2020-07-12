import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
  isSuccess: false,
  errorServerMessage: '',
  isNewPswFetching: false
};

export const newPswReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {

    case "NEW_PSW_REDUCER/SET_NEW_PSW_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess,
        errorServerMessage: action.errorServerMessage
      };

    case "NEW_PSW_REDUCER/SET_IS_FETCHING":
      return {
          ...state,
        isNewPswFetching: action.isFetching
      };

    default:
      return state
  }
};

const newPswActions = {

  setNewPswSuccess: (isSuccess: boolean, errorServerMessage: string) => ({
    type: 'NEW_PSW_REDUCER/SET_NEW_PSW_SUCCESS',
    isSuccess,
    errorServerMessage
  } as const),

  setIsFetching: (isFetching: boolean) => ({
    type: 'NEW_PSW_REDUCER/SET_IS_FETCHING',
    isFetching
  } as const),
};
type ActionsType = InferActionTypes<typeof newPswActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const setNewPsw = (resetPswToken: string, password: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(setIsPreventFetching(true));
    dispatch(newPswActions.setIsFetching(true));
    const response = await api.setNewPsw(resetPswToken, password);
    dispatch(newPswActions.setNewPswSuccess(response.data.success, ''));
    dispatch(newPswActions.setIsFetching(false));
    dispatch(setIsPreventFetching(false));
  } catch (e) {
    dispatch(newPswActions.setNewPswSuccess(false, e.response.data.error));
    dispatch(newPswActions.setIsFetching(false));
    dispatch(setIsPreventFetching(false));
  }
};