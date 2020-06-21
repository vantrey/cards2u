import React from 'react';
import {repository} from "../../../helpers/repos_localStorage/Token";
import style from "./Cards.module.css"

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
        <div className={style.wrap}>
            <div className={style.card}>
                <div className={style.front}><span>{props.question}</span></div>
                <div className={style.back}><span>{props.answer}</span></div>
            </div>
        </div>
        <div className={style.grade_shots}>
            <div style={{'color': 'green'}}>grade:{props.grade}</div>
            <div style={{'color': 'blue'}}>shots:{props.shots}</div>
        </div>

      { repository.get_Auth_id() === props.userId &&
      <div>
        <button onClick={props.onDeleteCard}>Delete Card</button>
        <button onClick={props.onUpdateCard}>Update Card</button>
      </div>}
    </>
  );
};

export default Card;