import {AppStateType, InferActionTypes} from "../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../dal/api";
import {boolean, string} from "yup";


const initialState = {
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    token: string,
    rememberMe: boolean,
    errorServerMessage: string
}

export const loginReducer = (state: typeof initialState = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'cards2u/main/auth/AUTH_ME':
            debugger
            return {
                ...state,
                isAuth: action.isAuth, errorServerMessage: action.errorServerMessage
            }
        case "cards2u/main/auth/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
const actions = {
    loginAuthMeSuccess: (isAuth: boolean, errorServerMessage: string) => ({
        type: 'cards2u/main/auth/AUTH_ME', isAuth, errorServerMessage
    } as const),
    loginIsFetching: (isFetching: boolean) => ({
        type: 'cards2u/main/auth/IS_FETCHING',
        isFetching
    } as const),
}

type ActionsType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

// export const logout = (): ThunkType => async (dispatch: DispatchType) => {
//     debugger
//     let response = await api.logout()
//     if (response.data.status === 200) {
//         dispatch(loginAuthMeSuccess(null, null, false));
//     }
// };


export const login = (email: string, password: string, rememberMe: boolean):ThunkType =>
    async (dispatch: DispatchType) => {
        debugger
        try {
            dispatch(actions.loginIsFetching(true))
            const result = await api.login(email, password, rememberMe)
            dispatch(actions.loginAuthMeSuccess(result.data.success, ""));
            dispatch(actions.loginIsFetching(false))

        } catch (e) {
            debugger
            dispatch(actions.loginAuthMeSuccess(false, 'error'))
            dispatch(actions.loginIsFetching(false))
            console.log({...e})
        }

    }

