import * as yup from "yup";


export const restorePswFormSchema = yup.object().shape({
    email: yup.string().required('⚠ please, fill up your email')
        .email('⚠ please, fill up a valid email address'),
})