import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store/store";
import {CardType} from "../../../../types/entities";
import {get_Cards, setCardGrade, update_Card} from "../../bll/cardsReducer";
import {repository} from "../../../../helpers/repos_localStorage/Token";
import {useHistory, useParams} from 'react-router-dom';
import LearnPage from "./LearnPage";

const getCard = (cards: Array<CardType>) => {

  const sum = cards.reduce((acc, card) => acc + (card.grade) * (card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
      const newSum = acc.sum + (card.grade) * (card.grade);
      return {sum: newSum, id: newSum < rand ? i : acc.id}
    }
    , {sum: 0, id: -1});

  return cards[res.id + 1];
}

const getGrade = (gradePrev: number, gradeNext: number, shots: number) => {
  return (gradePrev * shots + gradeNext) / (shots + 1)
}

const LearnPageContainer: React.FC = () => {
  const {cards} = useSelector((state: AppStateType) => state.cards);
  const dispatch = useDispatch()
  const history = useHistory()
  const {pack_id} = useParams()

  const [card, setCard] = useState<CardType>({
    answer: '',
    question: '',
    cardsPack_id: '',
    grade: 0,
    rating: 0,
    shots: 0,
    type: '',
    created: '',
    updated: '',
    __v: 0,
    _id: '',
    user_id: ''
  })

  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false)

  const [isGraded, setIsGraded] = useState<boolean>(false)

  const isMyDeck = repository.get_Auth_id() === card?.user_id

  useEffect(() => {
    dispatch(get_Cards(pack_id))
  }, [pack_id, dispatch])

  useEffect(() => {
    setCard(getCard(cards))
  }, [cards])

  const nextQuestion = () => {
    setCard(getCard(cards))
    setIsShowAnswer(false)
    setIsGraded(false)
  }

  const setGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newGrade = getGrade(card.grade, Number(e.currentTarget.name), card.shots)
    dispatch(setCardGrade({_id: card._id, grade: newGrade, shots: card.shots + 1}))
    setIsGraded(true)
  }

  const onBackClick = () => {
    history.goBack()
  }

  return (
   <LearnPage
     isShowAnswer={isShowAnswer}
     setIsShowAnswer={setIsShowAnswer}
     card={card}
     nextQuestion={nextQuestion}
     isMyDeck={isMyDeck}
     isGraded={isGraded}
     setGrade={setGrade}
     onBackClick={onBackClick}/>
  );
};

export default LearnPageContainer;