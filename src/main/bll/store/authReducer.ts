import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../dal/api";
import {repository} from "../../helpers/repos_localStorage/Token";

const initialState = {
    _id: '',
    isAuth: false,
    isFetching: false
}
type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH_REDUCER/AUTH_ME':
            return {
                ...state,
                isAuth: action.isAuth,
                _id: action._id,
                isFetching: false
            }
        case "AUTH_REDUCER/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}
const authActions = {
    authMeSuccess: (isAuth: boolean, _id: string) => ({
        type: 'AUTH_REDUCER/AUTH_ME',
        isAuth,
        _id
    } as const),

    authIsFetching: (isFetching: boolean) => ({
        type: 'AUTH_REDUCER/IS_FETCHING',
        isFetching
    } as const),
}
type ActionsType = InferActionTypes<typeof authActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const authMe = (): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            let token = repository.getToken()
            if (!token) token = ''
            dispatch(authActions.authIsFetching(true))
            const response = await api.authMe(token)
            repository.saveToken(response.data.token, response.data.tokenDeathTime)
            dispatch(authActions.authMeSuccess(true, response.data._id))
        } catch (e) {
            dispatch(authActions.authMeSuccess(false,''))
        }
    }

