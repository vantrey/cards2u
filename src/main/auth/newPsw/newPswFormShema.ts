import * as yup from "yup";

export const newPswFormSchema = yup.object().shape({
  password: yup.string().required('⚠ please, fill up your password')
    .min(8, `password has to be at least ${8} characters long.`),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), undefined], 'password mismatch')
})