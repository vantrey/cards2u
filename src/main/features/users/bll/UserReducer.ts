import {AppStateType, InferActionTypes} from "../../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {UserType} from "../../../types/entities";
import {api} from "../../../dal/api";
import {repository} from "../../../helpers/repos_localStorage/Token";
import {setIsPreventFetching} from "../../../bll/preventReques/preventRequestReducer";


const initialState = {
    users: [] as Array<UserType>,
    page: 1,
    pageCount: 10,
    totalUsersCount: 0,
    isFetching: false
}

type InitialStateType = typeof initialState

export const userReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'cards2u/main/users/GET_USERS':
            return {
                ...state, users: action.users
            }
        case "cards2u/main/users/SET_PAGE_DATA":
            return {
                ...state,
                page: action.pageData.page,
                pageCount: action.pageData.pageCount,
                totalUsersCount: action.pageData.totalUsersCount
            }
        case "cards2u/main/users/SET_PAGE":
            return {
                ...state,
                page: action.page
            }

        default:
            return state
    }
}
export const usersActions = {
    getUserSuccess: (users: UserType[]) => ({
        type: 'cards2u/main/users/GET_USERS', users
    } as const),
    setPageCount: (pageData: { page: number, pageCount: number, totalUsersCount: number }) => ({
        type: 'cards2u/main/users/SET_PAGE_DATA', pageData
    } as const),
    setPage: (page: number) => ({
        type: 'cards2u/main/users/SET_PAGE', page
    } as const),

}
type ActionsType = InferActionTypes<typeof usersActions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getUser = (page: number, pageCount: number, sortUsers = 'name', direction = '0'): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        try {
            dispatch(setIsPreventFetching(true))
            let token = repository.getToken()
            const result = await api.getUsers(token, page, pageCount, direction + sortUsers)
            repository.saveToken(result.token, result.tokenDeathTime)
            dispatch(usersActions.getUserSuccess(result.users));
            dispatch(usersActions.setPageCount({
                page: result.page,
                pageCount: result.pageCount,
                totalUsersCount: result.usersTotalCount
            }));
            dispatch(setIsPreventFetching(false))
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(setIsPreventFetching(false))
        }

    }

