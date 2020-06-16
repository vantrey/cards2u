import React from 'react';
import Button from "../../../../ui/common/Button/Button";

type LearnPageGradesPropsType = {
  isGraded: boolean
  isMyDeck: boolean
  setGrade: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const LearnPageGrades: React.FC<LearnPageGradesPropsType> = ({
                                                               isMyDeck,
                                                               isGraded,
                                                               setGrade
                                                             }) => {
  const gradeEls = [
    {name: '1', title: 'easy'},
    {name: '2', title: 'medium'},
    {name: '3', title: 'hard'},
    {name: '4', title: 'very hard'},
    {name: '5', title: 'I have no idea'}
  ].map(g =>
    <Button
      key={g.name}
      disabled={isGraded}
      name={g.name}
      tittle={g.title}
      onClick={setGrade}
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