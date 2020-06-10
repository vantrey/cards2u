import React from "react";
import styles from './CardPacks.module.css'
import Link from "../../../ui/common/Link/Link";

type CardPackType = {
  name: string
  grade: number
  id: string
}

const CardPack: React.FC<CardPackType> = (props) => {
  return (
    <>
      <td> {props.name} </td>
      <td> {props.grade} </td>
      <td><Link title={'cards'} path={`cards/${props.id}`}/></td>
    </>
  )
}

export default CardPack