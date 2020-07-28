import {CardPackType} from '../../types/entities';
import {setIsPreventFetching} from '../preventReques/preventRequestReducer';
import {repository} from '../../helpers/repos_localStorage/reposetory';
import {cardPacksApi} from '../../features/cardsPacks/dal/cardPacksApi';
import {AppStateType, InferActionTypes} from '../store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {cardPacksActions} from '../../features/cardsPacks/bll/cardPacksReducer';

const initialState = {
    packsFound: [] as Array<CardPackType>,
    cardPacksTotalCount: 0,
    searchError: '',
    isSearchSuccess: false,
    isSearchFetching: false,
    foundName: ''
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
        case 'SEARCH_REDUCER/SAVE_FOUND_NAME':
            return {
                ...state,
                foundName: action.deckName
            }
        default :
            return state;

    }


};

type ActionsType = InferActionTypes<typeof searchActions>|
    InferActionTypes<typeof cardPacksActions>


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>


export const searchActions = {
    getSearchPacksSuccess: (cardPacks: Array<CardPackType>, cardPacksTotalCount: number) => ({
        type: 'SEARCH_REDUCER/SEARCH_PACKS_SUCCESS',
        cardPacks, cardPacksTotalCount
    } as const),
    setSearchSuccess: (isSearchSuccess: boolean) => ({
        type: 'SEARCH_REDUCER/SEARCH_SUCCESS',
        isSearchSuccess
    } as const),
    setSearchFetching: (isSearchFetching: boolean) => ({
        type: 'SEARCH_REDUCER/SEARCH_IS_FETCHING',
        isSearchFetching
    } as const),
    setSearchError: (error: string) => ({
        type: 'SEARCH_REDUCER/SEARCH_ERROR',
        error
    } as const),
    saveFoundName: (deckName: string) => ({
        type: 'SEARCH_REDUCER/SAVE_FOUND_NAME',
        deckName
    } as const)
}


export const globalSearchForDecks = (deckName: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(cardPacksActions.setIsCardPacksFromSearch(true));
            dispatch(setIsPreventFetching(true));
            dispatch(searchActions.setSearchFetching(true));
            dispatch(cardPacksActions.setIsFetching(true));
            dispatch(searchActions.saveFoundName(deckName));
            let token = repository.getToken();
            const response = await cardPacksApi.getPacksForSearch(token, deckName)
            dispatch(searchActions.getSearchPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount));
            dispatch(cardPacksActions.getCardPacksSuccess(response.data.cardPacks,response.data.cardPacksTotalCount));
            repository.saveToken(response.data.token, response.data.tokenDeathTime);
            dispatch(searchActions.setSearchSuccess(true));
            dispatch(searchActions.setSearchFetching(false));
            dispatch(setIsPreventFetching(false));
            dispatch(cardPacksActions.setIsFetching(false));
        } catch (e) {
            dispatch(searchActions.setSearchError(e.response.data.error));
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(searchActions.setSearchSuccess(false));
            dispatch(searchActions.setSearchFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };