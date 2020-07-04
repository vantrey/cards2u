import React from 'react';
import {CardType} from "../../../../types/entities";
import LearnPageBody from "./lernPageBody";
import LearnPageGrades from "./LernPageGrades";

type LearnPagePropsType = {
  isShowAnswer: boolean
  setIsShowAnswer: (isShowAnswer: boolean) => void
  card: CardType
  onNextQuestion: () => void
  isMyDeck: boolean
  isGraded: boolean
  onSetGrade: (e: React.MouseEvent<HTMLButtonElement>) => void
  onBackClick: () => void
}

const LearnPage: React.FC<LearnPagePropsType> = ({
                                                   isShowAnswer,
                                                   card,
                                                   setIsShowAnswer,
                                                   onNextQuestion,
                                                   isMyDeck,
                                                   isGraded,
                                                   onSetGrade,
                                                   onBackClick
                                                 }) => {

  return (
    <div>

      <LearnPageBody
        isShowAnswer={isShowAnswer}
        setIsShowAnswer={setIsShowAnswer}
        card={card}
        onNextQuestion={onNextQuestion}
        isMyDeck={isMyDeck}
        isGraded={isGraded}
      />

      <LearnPageGrades
        isGraded={isGraded}
        isMyDeck={isMyDeck}
        onSetGrade={onSetGrade}
      />

      <div
        style={{cursor: "pointer", color: "blue"}}
        onClick={onBackClick}>back to deck summary
      </div>

    </div>
  );
};

export default LearnPage;