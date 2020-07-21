import {CardPackType} from '../../types/entities';
import {setIsPreventFetching} from '../preventReques/preventRequestReducer';
import {repository} from '../../helpers/repos_localStorage/Token';
import {cardPacksApi} from '../../features/cardsPacks/dal/cardPacksApi';
import {AppStateType, InferActionTypes} from '../store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

const initialState = {
    packsFound: [] as Array<CardPackType>,
    cardPacksTotalCount: 0,
    searchError: '',
    isSearchSuccess: false,
    isSearchFetching: false

}


type InitialStateType = typeof initialState;


export const searchReducer = (state
                                  = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SEARCH_REDUCER/SEARCH_PACKS_SUCCESS':
            return {
                ...state,
                packsFound: action.cardPacks,
                cardPacksTotalCount: action.cardPacksTotalCount
            }
        case 'SEARCH_REDUCER/SEARCH_SUCCESS':
            return {
                ...state,
                isSearchSuccess: action.isSearchSuccess

            }
        case 'SEARCH_REDUCER/SEARCH_IS_FETCHING':
            return {
                ...state,
                isSearchFetching: action.isSearchFetching
            }
        case 'SEARCH_REDUCER/SEARCH_ERROR':
            return {
                ...state,
             searchError: action.error
            }
        default :
            return state;

    }


};

type ActionsType = InferActionTypes<typeof searchActions>


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>


export const searchActions = {
    setSearchPacksSuccess: (cardPacks: Array<CardPackType>, cardPacksTotalCount: number ) => ({
        type: 'SEARCH_REDUCER/SEARCH_PACKS_SUCCESS',
        cardPacks, cardPacksTotalCount
    } as const),
    setSearchSuccess: (isSearchSuccess:boolean) => ({
        type: 'SEARCH_REDUCER/SEARCH_SUCCESS',
        isSearchSuccess
    } as const),
    setSearchFetching: (isSearchFetching:boolean) => ({
        type: 'SEARCH_REDUCER/SEARCH_IS_FETCHING',
        isSearchFetching
    } as const),
    serSearchError: (error:string) => ({
        type: 'SEARCH_REDUCER/SEARCH_ERROR',
        error
    } as const)
}


export const globalSearchForDecks = (deckName: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(searchActions.setSearchFetching(true));
            let token = repository.getToken();
            const response = await cardPacksApi.getPacksForSearch(token, deckName)
            dispatch(searchActions.setSearchPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount));
            repository.saveToken(response.data.token, response.data.tokenDeathTime);
            dispatch(searchActions.setSearchSuccess(true));
            dispatch(searchActions.setSearchSuccess(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            dispatch(searchActions.serSearchError(e.response.data.error));
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(searchActions.setSearchSuccess(false));
            dispatch(searchActions.setSearchFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };