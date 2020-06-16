import React from 'react';
import {repository} from "../../../helpers/repos_localStorage/Token";


type CardType = {
  answer: string
  question: string
  grade: number
  shots: number
  userId: string
  onDeleteCard: () => void
  onUpdateCard: () => void
}

const Card: React.FC<CardType> = ({...props}) => {
  return (
    <>
      <div>{props.question}</div>
      <div>{props.answer}</div>
      <div style={{'color': 'green'}}>{props.grade}</div>
      <div style={{'color': 'blue'}}>{props.shots}</div>

      { repository.get_Auth_id() === props.userId &&
      <div>
        <button onClick={props.onDeleteCard}>Delete Card</button>
        <button onClick={props.onUpdateCard}>Update Card</button>
      </div>}
    </>
  );
};

export default Card;