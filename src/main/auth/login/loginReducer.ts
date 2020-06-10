import {AppStateType, InferActionTypes} from "../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../dal/api";
import {repository} from "../../helpers/repos_localStorrage/Token";

const initialState = {
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    token: '',
    rememberMe: false,
    errorServerMessage: '',
    _id: ''
}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'cards2u/main/auth/AUTH_ME':
            return {
                ...state,
                isAuth: action.isAuth, errorServerMessage: action.errorServerMessage, _id: action._id
            }
        case "cards2u/main/auth/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        // case "cards2u/main/auth/SAVE_TOKEN":
        //     return {
        //         ...state,
        //         token: action.token,
        //         errorServerMessage: action.errorServerMessage
        //     }
        default:
            return state
    }
}
const actions = {
    loginAuthMeSuccess: (isAuth: boolean, errorServerMessage: string, _id: string) => ({
        type: 'cards2u/main/auth/AUTH_ME', isAuth, errorServerMessage, _id
    } as const),
    // saveTokenSuccess: (token: string, errorServerMessage: string) => ({
    //     type: 'cards2u/main/auth/SAVE_TOKEN', token, errorServerMessage
    // } as const),
    loginIsFetching: (isFetching: boolean) => ({
        type: 'cards2u/main/auth/IS_FETCHING',
        isFetching
    } as const),
}
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

//!Для усовершенстования логина. Показывает кнопку "login out". Дает возможность вылогиниться.
// export const logout = (): ThunkType => async (dispatch: DispatchType) => {
//     debugger
//     let response = await api.logout()
//     if (response.data.status === 200) {
//         dispatch(loginAuthMeSuccess(null, null, false));
//     }
// };

// export const saveToken = (token: string): ThunkType =>
//     async (dispatch: DispatchType) => {
//         try {
//             const result = await api.authMe(token)
//             dispatch(actions.saveTokenSuccess(result.data.token, ""))
//             let stateAsString = JSON.stringify(result.data.token);
//             localStorage.setItem("token", stateAsString);
//             let saveTokenParse = localStorage.getItem("token");
//             if (saveTokenParse != null) {
//                 token = JSON.parse(stateAsString);
//             }
//         } catch (e) {
//             dispatch(actions.saveTokenSuccess(token, e.response.data.error))
//         }
//     }


export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(actions.loginIsFetching(true))
            const result = await api.login(email, password, rememberMe)
            dispatch(actions.loginAuthMeSuccess(result.data.success, "", result.data._id));
            repository.saveToken(result.data.token,result.data.tokenDeathTime)
            repository.getToken()

            dispatch(actions.loginIsFetching(false))
        } catch (e) {
            dispatch(actions.loginAuthMeSuccess(false, e.response.data.error, ''))
            dispatch(actions.loginIsFetching(false))
        }
    }

