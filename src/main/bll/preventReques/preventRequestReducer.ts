import {InferActionTypes} from "../store/store";

const initialState = {
    isFetching: false
};

type InitialStateType = typeof initialState

export const preventRequestReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "PREVENT_REQUEST_REDUCER/SET_IS_FETCHING":

            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state
    }
};

export const preventRequestActions = {
    setIsFetching: (isFetching: boolean) => ({
        type: 'PREVENT_REQUEST_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const)
};

type ActionsType = InferActionTypes<typeof preventRequestActions>

