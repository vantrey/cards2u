import React from 'react';
import Button from "../../../../ui/common/Button/Button";
import {CardType} from "../../../../types/entities";

type LearnPageBodyPropsType = {
  isShowAnswer: boolean
  setIsShowAnswer: (isShowAnswer: boolean) => void
  card: CardType
  nextQuestion: () => void
  isMyDeck: boolean
  isGraded: boolean
}

const LearnPageBody: React.FC<LearnPageBodyPropsType> = ({
                                                           isShowAnswer,
                                                           card,
                                                           setIsShowAnswer,
                                                           nextQuestion,
                                                           isMyDeck,
                                                           isGraded,
                                                         }) => {

  return (
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

          <NextCard
            nextQuestion={nextQuestion}
            isDisabled={isMyDeck ? !isGraded : undefined}
          />
        </div>

    </div>

  );
};

type NextButtonPropsType = {
  isDisabled: boolean | undefined
  nextQuestion: () => void
}

const NextCard: React.FC<NextButtonPropsType> = (props) => {
  return (
    <Button
      disabled={props.isDisabled}
      onClick={props.nextQuestion}
      tittle={'next'}
    />
  )
}

export default LearnPageBody;