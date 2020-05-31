import React from 'react';
import styles from './Test.module.css'
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import Link from '../../ui/common/Link/Link';
import {
  LOGIN_PATH, NEW_PSW_PATH, PROFILE_PATH, REGISTRATION_PATH, RESTORE_PSW_PATH, ROOT_PATH
} from "../../ui/components/routes/Routes";
import {useForm} from "react-hook-form";
import * as yup from 'yup';

const Test = () => {
  let links: Array<JSX.Element> = [
    {title: 'login', path: LOGIN_PATH},
    {title: 'registration', path: REGISTRATION_PATH},
    {title: 'restore password', path: RESTORE_PSW_PATH},
    {title: 'new password', path: NEW_PSW_PATH},
    {title: 'profile', path: PROFILE_PATH},
    {title: 'root', path: ROOT_PATH},
  ].map(l => <Link key={l.title} title={l.title} path={l.path}/>)

  const formSchema = yup.object().shape({
    login: yup.string().required('⚠ please, fill up your login'),
    email: yup.string().required('⚠ please, fill up your email')
      .email('⚠ please, fill up a valid email address'),
  })

  const { register, handleSubmit, errors } = useForm({mode: 'onBlur', validationSchema: formSchema});
  const onSubmit = (data: any) => console.log(data);

  return  <div className={styles.test}>
    <h1>TEST</h1>
    <div className={styles.links}>{links}</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name={'login'}
        register={register}
        error={errors.login}
        placeholder='login'
      />
      <Input
        name={'email'}
        register={register}
        error={errors.email}
        placeholder='email'
      />
      <Button tittle='send' />
    </form>
  </div>
}
export default Test