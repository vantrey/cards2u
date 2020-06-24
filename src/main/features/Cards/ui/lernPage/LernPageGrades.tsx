import React from 'react';
import Button from "../../../../ui/common/Button/Button_123";

type LearnPageGradesPropsType = {
  isGraded: boolean
  isMyDeck: boolean
  onSetGrade: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const LearnPageGrades: React.FC<LearnPageGradesPropsType> = ({
                                                               isMyDeck,
                                                               isGraded,
                                                               onSetGrade
                                                             }) => {
  const gradeEls = [
    {name: '5', title: 'easy'},
    {name: '4', title: 'medium'},
    {name: '3', title: 'hard'},
    {name: '2', title: 'very hard'},
    {name: '1', title: 'I have no idea'}
  ].map(g =>
    <Button
      key={g.name}
      disabled={isGraded}
      name={g.name}
      tittle={g.title}
      onClick={onSetGrade}
    />
  )

  return (
    <div>

      {(isMyDeck &&

        <div>
          {gradeEls}
        </div>) ||

      <div>
        It's not your deck
      </div>}

    </div>
  );
};

export default LearnPageGrades;