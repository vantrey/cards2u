import {AppStateType, InferActionTypes} from "../store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const initialState = {
    isPreventFetching: false
};

type InitialStateType = typeof initialState

export const preventRequestReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "PREVENT_REQUEST_REDUCER/SET_IS_PREVENT_FETCHING":

            return {
                ...state,
                isPreventFetching: action.isPreventFetching
            };

        default:
            return state
    }
};

const preventRequestActions = {
    setIsPreventFetchingSuccess: (isPreventFetching: boolean) => ({
        type: 'PREVENT_REQUEST_REDUCER/SET_IS_PREVENT_FETCHING',
        isPreventFetching
    } as const)
};

type ActionsType = InferActionTypes<typeof preventRequestActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const setIsPreventFetching = (isPreventFetching: boolean): ThunkType =>
    (dispatch: DispatchType) => {

    dispatch(preventRequestActions.setIsPreventFetchingSuccess(isPreventFetching))

};

