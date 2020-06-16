import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {CardType} from "../../../types/entities";
import Button from "../../../ui/common/Button/Button";
import {setCardGrade} from "../bll/cardsReducer";
import {repository} from "../../../helpers/repos_localStorage/Token";

const getCard = (cards: Array<CardType>) => {

  const sum = cards.reduce((acc, card) => acc + (card.grade) * (card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
      const newSum = acc.sum + (card.grade) * (card.grade);
      return {sum: newSum, id: newSum < rand ? i : acc.id}
    }
    , {sum: 0, id: -1});
  console.log('test: ', sum, rand, res)

  return cards[res.id + 1];
}

const getGrade = (gradePrev: number, gradeNext: number, shots: number) => {
  return (gradePrev * shots + gradeNext) / (shots + 1)
}

const LearnPage: React.FC = () => {
  const {cards} = useSelector((state: AppStateType) => state.cards);
  const dispatch = useDispatch()

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

  return (
    <div>
      <div>

        <div>
          {!isShowAnswer &&
          <div>
            <div>question</div>
            <div style={{fontWeight: "bold"}}>{card?.question}</div>
          </div>}

          {isShowAnswer &&
          <div>
            <div>answer</div>
            <div style={{fontWeight: "bold"}}>{card?.answer}</div>
          </div>}
        </div>

        <div>
          <div>
            {!isShowAnswer &&
            <Button
              onClick={() => {
                setIsShowAnswer(true)
              }}
              tittle={'answer'}
            />}

            {isShowAnswer &&
            <Button
              onClick={() => {
                setIsShowAnswer(false)
              }}
              tittle={'question'}
            />}

            <Button
              onClick={nextQuestion}
              tittle={'next'}
            />
          </div>




        </div>
      </div>

      {(repository.get_Auth_id() === card?.user_id &&
        <div>
          <Button disabled={isGraded} name={'1'} tittle={'easy'} onClick={setGrade}/>
          <Button disabled={isGraded} name={'2'} tittle={'medium'} onClick={setGrade}/>
          <Button disabled={isGraded} name={'3'} tittle={'hard'} onClick={setGrade}/>
          <Button disabled={isGraded} name={'4'} tittle={'very hard'} onClick={setGrade}/>
          <Button disabled={isGraded} name={'5'} tittle={'I have no idea'} onClick={setGrade}/>
        </div>)}

    </div>
  );
};

export default LearnPage;