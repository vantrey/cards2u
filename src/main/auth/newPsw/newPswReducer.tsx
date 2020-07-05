import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
  isSuccess: false,
  errorServerMessage: '',
};

export const newPswReducer = (state: typeof initialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case "NEW_PSW_REDUCER/SET_NEW_PSW_SUCCESS":
      return {
        ...state,
        isSuccess: action.isSuccess,
        errorServerMessage: action.errorServerMessage
      };

    default:
      return state
  }
};

const actions = {
  setNewPswSuccess: (isSuccess: boolean, errorServerMessage: string) => ({
    type: 'NEW_PSW_REDUCER/SET_NEW_PSW_SUCCESS',
    isSuccess,
    errorServerMessage
  } as const),
};
type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const setNewPsw = (resetPswToken: string, password: string): ThunkType => async (dispatch: DispatchType) => {
  try {
    dispatch(setIsPreventFetching(true));
    const response = await api.setNewPsw(resetPswToken, password);
    dispatch(actions.setNewPswSuccess(response.data.success, ''));
    dispatch(setIsPreventFetching(false));
  } catch (e) {
    dispatch(actions.setNewPswSuccess(false, e.response.data.error));
    dispatch(setIsPreventFetching(false));
  }
};