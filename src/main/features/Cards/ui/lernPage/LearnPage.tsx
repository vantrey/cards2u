import React from 'react';
import Button from "../../../../ui/common/Button/Button";
import {CardType} from "../../../../types/entities";
import LearnPageBody from "./lernPageBody";
import LearnPageGrades from "./LernPageGrades";

type LearnPagePropsType = {
  isShowAnswer: boolean
  setIsShowAnswer: (isShowAnswer: boolean) => void
  card: CardType
  nextQuestion: () => void
  isMyDeck: boolean
  isGraded: boolean
  setGrade: (e: React.MouseEvent<HTMLButtonElement>) => void
  onBackClick: () => void
}

const LearnPage: React.FC<LearnPagePropsType> = ({
                                                   isShowAnswer,
                                                   card,
                                                   setIsShowAnswer,
                                                   nextQuestion,
                                                   isMyDeck,
                                                   isGraded,
                                                   setGrade,
                                                   onBackClick
                                                 }) => {

  return (
    <div>

      <LearnPageBody
        isShowAnswer={isShowAnswer}
        setIsShowAnswer={setIsShowAnswer}
        card={card}
        nextQuestion={nextQuestion}
        isMyDeck={isMyDeck}
        isGraded={isGraded}
      />

      <LearnPageGrades
        isGraded={isGraded}
        isMyDeck={isMyDeck}
        setGrade={setGrade}
      />

      <div
        style={{cursor: "pointer", color: "blue"}}
        onClick={onBackClick}>back to deck summary
      </div>

    </div>
  );
};

export default LearnPage;