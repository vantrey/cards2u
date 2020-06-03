import * as yup from "yup";
export const loginFormSchema = yup.object().shape({
    email: yup.string().required('⚠ please, fill up your email')
        .email('⚠ please, fill up a valid email address'),
    password: yup.string().required('⚠ please, fill up your password')
        .min(8, `password has to be at least ${8} characters long.`),
    rememberMe: yup.boolean()
})