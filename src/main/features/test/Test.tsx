import React from 'react';
import styles from './Test.module.css'
import Link from '../../ui/common/Link/Link';
import {
  LOGIN_PATH, NEW_PSW_PATH, PROFILE_PATH, REGISTRATION_PATH, RESTORE_PSW_PATH
} from "../../ui/components/routes/Routes";

const Test = () => {
  let links: Array<JSX.Element> = [
    {title: 'login', path: LOGIN_PATH},
    {title: 'registration', path: REGISTRATION_PATH},
    {title: 'restore password', path: RESTORE_PSW_PATH},
    {title: 'new password', path: NEW_PSW_PATH},
    {title: 'profile', path: PROFILE_PATH},
  ].map(l => <Link key={l.title} title={l.title} path={l.path}/>)

  return <div className={styles.test}>
    <h1>TEST</h1>
    <div className={styles.links}>{links}</div>
  </div>
}
export default Test;