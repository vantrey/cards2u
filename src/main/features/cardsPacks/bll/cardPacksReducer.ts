import {AppStateType, InferActionTypes} from '../../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../../types/entities";
import {cardPacksApi} from "../dal/cardPacksApi";
import {repository} from "../../../helpers/repos_localStorage/Token";
import {setIsPreventFetching} from "../../../bll/preventReques/preventRequestReducer";




const initialState = {
    cardPacks: [] as  Array<CardPackType>,
    errorFromServer: '',
    pageSize: 6,
    totalCardPacksCount: 0,
    isSuccess:false,
    cardsPackId: '',
    user_id: '',
    isFetching: false
};

type InitialStateType =typeof initialState

export const cardPacksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CARD_PACKS_REDUCER/GET_CARD_PACKS":
            return {
                ...state,
                cardPacks: action.cardPacks,
                totalCardPacksCount: action.totalCardPacksCount
            };
        case "CARD_PACKS_REDUCER/CREATE_CARD_PACKS":
            return {
                ...state,
                cardPacks: [...state.cardPacks, action.newCardsPack],
            };

        case "CARD_PACKS_REDUCER/SET_ERROR":
            return {
                ...state,
                errorFromServer: action.error,
            };
        case "CARD_PACKS_REDUCER/DELETE_CARDS_PACK":
            return {
                ...state,
                cardPacks: state.cardPacks.filter(tl => tl.user_id !== action.cardsPackId)
            };
            case "CARD_PACKS_REDUCER/SET_SUCCESS":
            return {
                ...state,
               isSuccess: action.isSuccess
            };
        default:
            return state
    }
};

export const cardPacksActions = {
    setIsSuccess: (isSuccess: boolean) => ({
        type: 'CARD_PACKS_REDUCER/SET_SUCCESS', isSuccess
    } as const),
    getCardPacksSuccess: (cardPacks: Array<CardPackType>, totalCardPacksCount: number) => ({
        type: 'CARD_PACKS_REDUCER/GET_CARD_PACKS',
        cardPacks,
        totalCardPacksCount
    } as const),
    createCardsPackSuccess: (newCardsPack: CardPackType) => ({
        type: 'CARD_PACKS_REDUCER/CREATE_CARD_PACKS',
        newCardsPack
    } as const),
    setError: (error: string) => ({
        type: 'CARD_PACKS_REDUCER/SET_ERROR',
        error
    } as const),
    deleteCardsPack: (cardsPackId: string) => ({
        type: 'CARD_PACKS_REDUCER/DELETE_CARDS_PACK',
        cardsPackId

    } as const)
};

type ActionsType = InferActionTypes<typeof cardPacksActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getCardPacks = (currentPage: number | null, pageSize: number | null, user_id: string | null): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true))
            let token = repository.getToken();
            const response = await cardPacksApi.getPacks(token, currentPage, pageSize, user_id);
            dispatch(cardPacksActions.getCardPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount));
            repository.saveToken(response.data.token, response.data.tokenDeathTime);
            dispatch(cardPacksActions.setIsSuccess(true));
            dispatch(setIsPreventFetching(false))

        } catch (e) {
            dispatch(cardPacksActions.setError(e.response.data.error));
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(setIsPreventFetching(false));
            dispatch(cardPacksActions.setIsSuccess(false));
        }
    };

export const createCardsPack = (newCardsPack: { name: string }): ThunkType => async (dispatch: DispatchType) => {
    try {
        dispatch(setIsPreventFetching(true));
        let token = repository.getToken();
        let user_id = repository.get_Auth_id();
        const response = await cardPacksApi.createCardsPack(token, {...newCardsPack, user_id});
        dispatch(cardPacksActions.createCardsPackSuccess(response.data.newCardsPack));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        dispatch(setIsPreventFetching(false));

    } catch (e) {
        dispatch(cardPacksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(setIsPreventFetching(false));
    }
};

export const deleteCardsPacks = (cardsPackId: string): ThunkType=> async (dispatch: DispatchType) => {
    try {
        dispatch(setIsPreventFetching(true));
        let token = repository.getToken();
        const response = await cardPacksApi.deleteCardsPack(token, cardsPackId);
        dispatch(cardPacksActions.deleteCardsPack(response.data.deletedCardsPack.user_id));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        dispatch(setIsPreventFetching(false));

    } catch (e) {
        dispatch(cardPacksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(setIsPreventFetching(false));
    }
};
