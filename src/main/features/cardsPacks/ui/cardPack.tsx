import React from "react";
import styles from './CardPacks.module.css'

type CardPackType = {
  name: string
  grade: number
}

const CardPack: React.FC<CardPackType> = (props) => {
  return (
    <>
      <td> {props.name} </td>
      <td> {props.grade} </td>
    </>
  )
}

export default CardPack