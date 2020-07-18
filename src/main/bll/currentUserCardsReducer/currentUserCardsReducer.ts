import {AddCardType, CardType, NewCardGradeType, UpdateCardType} from "../../types/entities";
import {AppStateType, InferActionTypes} from "../store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {repository} from "../../helpers/repos_localStorage/Token";
import {cardsApi} from "../../features/Cards/dal/сardsApi";
import {setIsPreventFetching} from "../preventReques/preventRequestReducer";


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

export const currentUserCardsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CURRENT_USER_CARDS_REDUCER/SET_CARDS":
            return {
                ...state,
                cards: action.cards,
                cardPackName: action.cardPackName,
                cardsPack_id: action.cardsPack_id
            };

        case  "CURRENT_USER_CARDS_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            };

        case  "CURRENT_USER_CARDS_REDUCER/SET_PAGE":
            return {
                ...state,
                page: action.page
            };

        case "CURRENT_USER_CARDS_REDUCER/SET_GRADE_CARD_SUCCESS":
            return {
                ...state,
                cards: state.cards.map(c => {
                    if (action.newCardGrade._id === c._id) {
                        return {...c, grade: action.newCardGrade.grade, shots: action.newCardGrade.shots}
                    }
                    return c
                })
            };

        case "CURRENT_USER_CARDS_REDUCER/ADD_CARD_SUCCESS":
            return {
                ...state,
                cards: [...state.cards, action.newCard]
            };

        case "CURRENT_USER_CARDS_REDUCER/DEL_CARD_SUCCESS":
            return {
                ...state,
                cards: state.cards.filter(c => c._id !== action.deletedCard._id)
            };

        case "CURRENT_USER_CARDS_REDUCER/UPD_CARD_SUCCESS":
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

        case "CURRENT_USER_CARDS_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
                  isCardsFetching: action.isFetching
            };

        default:
            return state;
    }

};

export const currentUserCardsActions = {
    setCards: (cards: Array<CardType>, cardPackName: string, cardsPack_id: string) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/SET_CARDS',
        cards,
        cardPackName,
        cardsPack_id,
    } as const),

    set_Success: (isSuccess: boolean) => ({
        type: "CURRENT_USER_CARDS_REDUCER/SET_SUCCESS", isSuccess
    } as const),
    setFirstPage: (page: number) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/SET_PAGE', page
    } as const),

    setCardGradeSuccess: (newCardGrade: NewCardGradeType) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/SET_GRADE_CARD_SUCCESS',
        newCardGrade
    } as const),

    addCardSuccess: (newCard: CardType) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/ADD_CARD_SUCCESS',
        newCard
    } as const),

    delCardSuccess: (deletedCard: CardType) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/DEL_CARD_SUCCESS',
        deletedCard
    } as const),

    updCardSuccess: (updatedCard: CardType) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/UPD_CARD_SUCCESS',
        updatedCard
    } as const),

    setIsFetching: (isFetching: boolean) => ({
        type: 'CURRENT_USER_CARDS_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),

};

type ActionsType = InferActionTypes<typeof currentUserCardsActions>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getCurrentUserCards = (
    cardsPack_id: string, cardPackName: string | null, sortCards = `question`, direction = '0'): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(currentUserCardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.getCards(cardsPack_id, token, direction + sortCards);

            dispatch(currentUserCardsActions.setCards(
                res.data.cards,
                cardPackName ? cardPackName : '', // to prevent set null to state
                cardsPack_id
            ));
            dispatch(currentUserCardsActions.set_Success(true));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));

        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };


export const addCurrentUserCard = ({cardsPack_id, question, answer}: AddCardType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(currentUserCardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.addCard({cardsPack_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(res.data.success));
            dispatch(currentUserCardsActions.addCardSuccess(res.data.newCard));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(false));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const deleteCurrentUserCard = (card_id: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(currentUserCardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.deleteCard(card_id, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(res.data.success));
            dispatch(currentUserCardsActions.delCardSuccess(res.data.deletedCard));
            /* dispatch(get_Cards(cardsPack_id));*/
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(false));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

export const updateCurrentUserCard = ({_id, question, answer}: UpdateCardType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(currentUserCardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard({_id, question, answer}, token);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(res.data.success));
            dispatch(currentUserCardsActions.updCardSuccess(res.data.updatedCard));
            /*dispatch(get_Cards(cardsPack_id));*/
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(false));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };
export const setCurrentUserCardGrade = (newCardGrade: NewCardGradeType): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(currentUserCardsActions.setIsFetching(true));
            let token = repository.getToken();
            const res = await cardsApi.updateCard(newCardGrade, token);
            dispatch(currentUserCardsActions.setCardGradeSuccess(newCardGrade));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(res.data.success));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
            dispatch(currentUserCardsActions.set_Success(false));
            dispatch(currentUserCardsActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };

