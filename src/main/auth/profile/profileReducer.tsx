import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {UserType} from "../../types/entities";
import {repository} from "../../helpers/repos_localStorage/Token";
import {api} from "../../dal/api";

const initialState = {
    isSuccess: false,
    errorServerMessage: '',
    isFetching: false,
    user: {
        avatar: '',
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        updated: '',
        verified: false,
        _id: ''
    } as UserType | undefined
}

type InitialStateType = typeof initialState

export const profileReducer = (state: typeof initialState = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "PROFILE_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            }

        case "PROFILE_REDUCER/SET_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "PROFILE_REDUCER/SET_ERROR":
            return {
                ...state,
                errorServerMessage: action.error
            }

        case "PROFILE_REDUCER/SET_USER_SUCCESS":
            return {
                ...state,
                user: action.user


            }


        default:
            return state
    }
}

export const profileActions = {
    setIsSuccess: (isSuccess: boolean) => ({type: "PROFILE_REDUCER/SET_SUCCESS", isSuccess} as const),
    setIsFetching: (isFetching: boolean) => ({type: 'PROFILE_REDUCER/SET_FETCHING', isFetching} as const),
    setErrorFromServer: (error: string) => ({type: 'PROFILE_REDUCER/SET_ERROR', error} as const),
    getUserSuccess: (user: UserType | undefined) => ({type: 'PROFILE_REDUCER/SET_USER_SUCCESS', user} as const)
}
type ActionsType = InferActionTypes<typeof profileActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getUserFromServer = (): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
    debugger
    try {
        dispatch(profileActions.setIsFetching(true))
        const token = repository.getToken()
        const userId = repository.get_Auth_id()
        const res = await api.getUsers(token, 1, 100)
        const user = res.users.find(user => user._id === userId)
        dispatch(profileActions.getUserSuccess(user))
        dispatch(profileActions.setIsSuccess(true))
        dispatch(profileActions.setIsFetching(false))
    } catch (e) {
        dispatch(profileActions.setErrorFromServer(e.response.data.error))
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(profileActions.setIsFetching(false))

    }
}