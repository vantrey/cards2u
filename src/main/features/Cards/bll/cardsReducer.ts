import {AddCardType, CardType, NewCardGradeType, UpdateCardType} from "../../../types/entities";
import {AppStateType, InferActionTypes} from "../../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {repository} from "../../../helpers/repos_localStorage/Token";
import {cardsApi} from "../dal/сardsApi";
import {setIsPreventFetching} from "../../../bll/preventReques/preventRequestReducer";


const initialState = {
    cards: [] as Array<CardType>,
    isFetching: false,
    isSuccess: false,
    page: 1,
    pageCount: 10,
    cardsTotalCount: 0,
};

type initialStateType = typeof initialState;

export const CardsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CARDS_REDUCER/SET_CARDS":
            return {
                ...state,
                cards: action.cards
            };

        case  "CARDS_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            };

        case  "CARDS_REDUCER/SET_PAGE":
            return {
                ...state,
                page: action.page
            };

        case "CARDS_REDUCER/SET_GRADE_CARD_SUCCESS":
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (action.newCardGrade._id === c._id) {
                        return {...c, grade: action.newCardGrade.grade, shots: action.newCardGrade.shots}
                    }
                    return c
                })
            };

        default:
            return state;
    }

};

export const cardsActions = {
    setCards: (cards: Array<CardType>) => ({type: 'CARDS_REDUCER/SET_CARDS', cards} as const),
    set_Success: (isSuccess: boolean) => ({type: "CARDS_REDUCER/SET_SUCCESS", isSuccess} as const),
    setFirstPage: (page: number) => ({type: 'CARDS_REDUCER/SET_PAGE', page} as const),
    setCardGradeSuccess: (newCardGrade: NewCardGradeType) => ({
        type: 'CARDS_REDUCER/SET_GRADE_CARD_SUCCESS',
        newCardGrade
    } as const)
};

type ActionsType = InferActionTypes<typeof cardsActions>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const get_Cards = (cardsPack_id: string, sortCards = `grade`, direction = '0'): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.getCards(cardsPack_id, token, direction + sortCards);
            dispatch(cardsActions.setCards(res.data.cards));
            dispatch(cardsActions.set_Success(true));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(setIsPreventFetching(false));
        }
    };


export const add_Card = ({cardsPack_id, question, answer}: AddCardType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.addCard({cardsPack_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(get_Cards(cardsPack_id));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const delete_Card = (card_id: string, cardsPack_id: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.deleteCard(card_id, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(get_Cards(cardsPack_id));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const update_Card = ({_id, question, answer}: UpdateCardType, cardsPack_id: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard({_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(get_Cards(cardsPack_id));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(setIsPreventFetching(false));
        }
    };
export const setCardGrade = (newCardGrade: NewCardGradeType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard(newCardGrade, token);
            dispatch(cardsActions.setCardGradeSuccess(newCardGrade));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(setIsPreventFetching(false));
        }
    };

