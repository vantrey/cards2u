import {AppStateType, InferActionTypes} from "../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {UserType} from "../../types/entities";
import {api} from "../../dal/api";
import {repository} from "../../helpers/repos_localStorage/Token";

const initialState = {
    users: [] as Array<UserType>

}

type InitialStateType = typeof initialState

export const getUserReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'cards2u/main/getUser/GET_USERS':
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}
export const actions = {
    getUserSuccess: (users: UserType[]) => ({
        type: 'cards2u/main/getUser/GET_USERS', users
    } as const)
}
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>


export const getUser = (): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            let token = repository.getToken()
            if (!token) token = ''
            const result = await api.getUsers(token)
            dispatch(actions.getUserSuccess(result.users));
            repository.saveToken(result.token, result.tokenDeathTime)
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);

        }
    }

