import React, {useState} from 'react';
import styles from './RestorePsw.module.css'
import {useForm} from 'react-hook-form';
import Input from "../../ui/common/Input/Input";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {send_Email} from "./restorePswReducer";


const RestorePsw = () => {


    const formSchema = yup.object().shape({
        email: yup.string().required('⚠ please, fill up your email')
            .email('⚠ please, fill up a valid email address'),
    })

    const html1 = '<a href=\'http://localhost:3000/#/reset-password/';
    const html2 = 'reset-password-link</a>';
    const [isSuccess]=useState<boolean>(false)
   /* const [html1] = useState<string>(someHtml1);
    const [html2] = useState<string>(someHtml2);*/
    const [email, setEmail] = useState<string>('');
    const[emailForApi]=useState<string>(email)
    const {register, errors, handleSubmit} = useForm({
        validationSchema: formSchema
    });
    const dispatch = useDispatch();


    dispatch(send_Email(isSuccess,emailForApi, html1, html2));




    const onSubmit = (data: any) => console.log(data);
    console.log(errors);


    return <div className={styles.restorePsw}>
        <label>password recovery</label>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                error={errors.email}
                name={"text"}
                type='email'
                placeholder="email"
                register={register}
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
            />
            <button>Send Email</button>
        </form>
    </div>
}
export default RestorePsw
