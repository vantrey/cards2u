import React from 'react';
import Button from "../../../../ui/common/Button/Button_123";
import {CardType} from "../../../../types/entities";

type LearnPageBodyPropsType = {
  isShowAnswer: boolean
  setIsShowAnswer: (isShowAnswer: boolean) => void
  card: CardType
  onNextQuestion: () => void
  isMyDeck: boolean
  isGraded: boolean
}

const LearnPageBody: React.FC<LearnPageBodyPropsType> = ({
                                                           isShowAnswer,
                                                           card,
                                                           setIsShowAnswer,
                                                           onNextQuestion,
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
            onNextQuestion={onNextQuestion}
            isDisabled={isMyDeck ? !isGraded : undefined}
          />
        </div>

    </div>

  );
};

type NextButtonPropsType = {
  isDisabled: boolean | undefined
  onNextQuestion: () => void
}

const NextCard: React.FC<NextButtonPropsType> = (props) => {
  return (
    <Button
      disabled={props.isDisabled}
      onClick={props.onNextQuestion}
      tittle={'next'}
    />
  )
}

export default LearnPageBody;