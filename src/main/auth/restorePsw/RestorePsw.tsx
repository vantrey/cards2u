import React from 'react';
import styles from './RestorePsw.module.css'
import { useForm } from 'react-hook-form';
import Input from "../../ui/common/Input/Input";

const RestorePsw = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  };


  return  <div className={styles.restorePsw}>
    <label>password recovery</label>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Input
        name={"text"}
        type='email'
        placeholder="email"
      register={register}

    />
    <button>Send Email</button>
    </form>
  </div>
}
export default RestorePsw
