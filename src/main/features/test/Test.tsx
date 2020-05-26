import React from 'react';
import styles from './Test.module.css'
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import Link from '../../ui/common/Link/Link';
import {loginPath, newPswPath, profilePath, registrationPath, restorePswPath} from "../../ui/components/routes/Routes";

const Test = () => {
  let links: Array<JSX.Element> = [
    {title: 'login', path: loginPath},
    {title: 'registration', path: registrationPath},
    {title: 'restore password', path: restorePswPath},
    {title: 'new password', path: newPswPath},
    {title: 'profile', path: profilePath},
  ].map(l => <Link key={l.title} title={l.title} path={l.path}/>)

  return  <div className={styles.test}>
    <h1>TEST</h1>
    <div className={styles.links}>{links}</div>
    <Input isError={false}/>
    <Button isDisabled={false}/>

  </div>
}
export default Test