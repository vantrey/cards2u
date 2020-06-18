import React from 'react';
import {repository} from "../../../helpers/repos_localStorage/Token";


type CardPropsType = {
  answer: string
  question: string
  grade: number
  shots: number
  userId: string
  onDeleteCard: () => void
  onUpdateCard: () => void
}

const Card: React.FC<CardPropsType> = ({...props}) => {
  return (
    <>
      <div>{props.question}</div>
      <div>{props.answer}</div>
      <div style={{'color': 'green'}}>grade:{props.grade}</div>
      <div style={{'color': 'blue'}}>shots:{props.shots}</div>

      { repository.get_Auth_id() === props.userId &&
      <div>
        <button onClick={props.onDeleteCard}>Delete Card</button>
        <button onClick={props.onUpdateCard}>Update Card</button>
      </div>}
    </>
  );
};

export default Card;