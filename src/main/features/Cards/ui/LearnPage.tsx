import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {CardType} from "../../../types/entities";
import Button from "../../../ui/common/Button/Button";
import {setCardGrade} from "../bll/cardsReducer";

const getCard = (cards: Array<CardType>) => {

  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return {sum: newSum, id: newSum < rand ? i : acc.id}
    }
    , {sum: 0, id: -1});
  console.log('test: ', sum, rand, res)

  return cards[res.id + 1];
}

const LearnPage: React.FC = () => {
  const {cards} = useSelector((state: AppStateType) => state.cards);

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
    _id: ''
  })
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  useEffect(() => {
    setCard(getCard(cards))
  }, [cards])

  const nextQuestion = () => {
    setCard(getCard(cards))
    setShowAnswer(false)
  }
  const setGrade = () => {
    setCardGrade({_id: card._id, grade: 1, shots: 1})
  }

  return (
    <div>
      <div>
        <div>
          {!showAnswer && <div>{card?.question}</div>}
          {showAnswer && <div>{card?.answer}</div>}
        </div>
        <Button onClick={() => {
          setShowAnswer(true)
        }} tittle={'answer'}/>
        <Button onClick={nextQuestion} tittle={'next'}/>
      </div>
      <Button tittle={'difficult 1'} onClick={setGrade}/>
      <Button tittle={'difficult 2'} onClick={setGrade}/>
      <Button tittle={'difficult 3'} onClick={setGrade}/>
      <Button tittle={'difficult 4'} onClick={setGrade}/>
      <Button tittle={'difficult 5'} onClick={setGrade}/>
    </div>
  );
};

export default LearnPage;