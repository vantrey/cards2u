import React from 'react';
import {CardType} from "../../../types/entities";
import Card from "./Card";
import styles from './Cards.module.css'
import Button from "../../../ui/common/Button/Button";
import {repository} from "../../../helpers/repos_localStorage/Token";

type OwnProps = {
  isFetching: boolean,
  cards: Array<CardType>
  onAddNewCard: () => void
  onDeleteCard: (card_id: string) => void
  onUpdateCard: (_id: string) => void
  userId: string
}

const Cards: React.FC<OwnProps> = ({
                                     isFetching,
                                     cards,
                                     onAddNewCard,
                                     onDeleteCard,
                                     onUpdateCard,
                                     userId
                                   }) => {

  const cardEls = cards.map(c =>
    <div className={styles.wrapCard} key={c._id}>
      <Card
        answer={c.answer}
        question={c.question}
        grade={c.grade}
        shots={c.shots}
        userId={c.user_id}
        onDeleteCard={() => {
          onDeleteCard(c._id)
        }}
        onUpdateCard={() => {
          onUpdateCard(c._id)
        }}
      />
    </div>
  )

  return (
    <div className={styles.Cards}>
      <table>
        <tbody className={styles.tbodyTag}>
        {
          isFetching && <div>...Loading please wait</div> ||
            cardEls
        }
        </tbody>
      </table>

      {repository.get_Auth_id() === userId &&
      <div>
        <Button onClick={onAddNewCard} tittle={'add new card'}/>
      </div>}

    </div>
  );
};

export default Cards;