import React from 'react';
import styles from './Link.module.css';
import {NavLink} from "react-router-dom";

type OwnPropsType = {
  path: string
  title: string
}

const Link: React.FC<OwnPropsType> = (props) => {
  return <NavLink
    to={props.path}
    activeClassName={styles.active}
  >
    {props.title}
  </NavLink>
}

export default Link
