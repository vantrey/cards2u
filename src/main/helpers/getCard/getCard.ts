import {CardType} from "../../types/entities";

export const getCard = {
    controlledRandom (cards: Array<CardType>) {
        const sum = cards.reduce((acc, card) => acc + (5 - card.grade) * (5 - card.grade), 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
                const newSum = acc.sum + (5 - card.grade) * (5 - card.grade);
                return {sum: newSum, id: newSum < rand ? i : acc.id}
            }
            , {sum: 0, id: -1});
        return cards[res.id + 1];
    },
    getCardGrade (gradePrev: number, gradeNext: number, shots: number) {
        return (gradePrev * shots + gradeNext) / (shots + 1);
    },
}