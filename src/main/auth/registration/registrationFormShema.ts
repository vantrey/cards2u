import * as yup from "yup";

export const registrationFormSchema = yup.object().shape({
  email: yup.string().required('⚠ please, fill up your email')
    .matches(/^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i, '⚠ please, fill up a valid email address'),
  password: yup.string().required('⚠ please, fill up your password')
    .min(8, `password has to be at least ${8} characters long.`),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), undefined], 'password mismatch')
});

