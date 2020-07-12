import {AddCardType, CardType, NewCardGradeType, UpdateCardType} from "../../../types/entities";
import {AppStateType, InferActionTypes} from "../../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {repository} from "../../../helpers/repos_localStorage/Token";
import {cardsApi} from "../dal/сardsApi";
import {setIsPreventFetching} from "../../../bll/preventReques/preventRequestReducer";


const initialState = {
    cards: [] as Array<CardType>,
    isCardsFetching: false,
    isSuccess: false,
    page: 1,
    pageCount: 10,
    cardsTotalCount: 0,
    cardPackName: '',
    cardsPack_id: '',
};

type initialStateType = typeof initialState;

export const CardsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CARDS_REDUCER/SET_CARDS":
            return {
                ...state,
                cards: action.cards,
                cardPackName: action.cardPackName,
                cardsPack_id: action.cardsPack_id
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

        case "CARDS_REDUCER/ADD_CARD_SUCCESS":
            return {
                ...state,
                cards: [...state.cards, action.newCard]
            };

        case "CARDS_REDUCER/DEL_CARD_SUCCESS":
            return {
                ...state,
                cards: state.cards.filter(c => c._id !== action.deletedCard._id)
            };

        case "CARDS_REDUCER/UPD_CARD_SUCCESS":
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (c._id === action.updatedCard._id) {
                        return {
                            ...c,
                            answer: action.updatedCard.answer,
                            question: action.updatedCard.question
                        }
                    }
                    return c
                })
            };

        case "CARDS_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
                  isCardsFetching: action.isFetching
            };

        default:
            return state;
    }

};

export const cardsActions = {
    setCards: (cards: Array<CardType>, cardPackName: string, cardsPack_id: string) => ({
        type: 'CARDS_REDUCER/SET_CARDS',
        cards,
        cardPackName,
        cardsPack_id,
    } as const),
    set_Success: (isSuccess: boolean) => ({type: "CARDS_REDUCER/SET_SUCCESS", isSuccess} as const),
    setFirstPage: (page: number) => ({type: 'CARDS_REDUCER/SET_PAGE', page} as const),

    setCardGradeSuccess: (newCardGrade: NewCardGradeType) => ({
        type: 'CARDS_REDUCER/SET_GRADE_CARD_SUCCESS',
        newCardGrade
    } as const),

    addCardSuccess: (newCard: CardType) => ({
        type: 'CARDS_REDUCER/ADD_CARD_SUCCESS',
        newCard
    } as const),

    delCardSuccess: (deletedCard: CardType) => ({
        type: 'CARDS_REDUCER/DEL_CARD_SUCCESS',
        deletedCard
    } as const),

    updCardSuccess: (updatedCard: CardType) => ({
        type: 'CARDS_REDUCER/UPD_CARD_SUCCESS',
        updatedCard
    } as const),

    setIsFetching: (isFetching: boolean) => ({
        type: 'CARDS_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),

};

type ActionsType = InferActionTypes<typeof cardsActions>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const get_Cards = (
    cardsPack_id: string, cardPackName: string | null, sortCards = `grade`, direction = '0'): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(cardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.getCards(cardsPack_id, token, direction + sortCards);

            dispatch(cardsActions.setCards(
                res.data.cards,
                cardPackName ? cardPackName : '', // to prevent set null to state
                cardsPack_id
            ));
            dispatch(cardsActions.set_Success(true));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));

        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };


export const add_Card = ({cardsPack_id, question, answer}: AddCardType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(cardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.addCard({cardsPack_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(cardsActions.addCardSuccess(res.data.newCard));
            /*dispatch(get_Cards(cardsPack_id));*/
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const delete_Card = (card_id: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(cardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.deleteCard(card_id, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(cardsActions.delCardSuccess(res.data.deletedCard))
            /* dispatch(get_Cards(cardsPack_id));*/
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const update_Card = ({_id, question, answer}: UpdateCardType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(cardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard({_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(cardsActions.updCardSuccess(res.data.updatedCard));
            /*dispatch(get_Cards(cardsPack_id));*/
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };
export const setCardGrade = (newCardGrade: NewCardGradeType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(cardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard(newCardGrade, token);
            dispatch(cardsActions.setCardGradeSuccess(newCardGrade));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(res.data.success));
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(cardsActions.set_Success(false));
            dispatch(cardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

