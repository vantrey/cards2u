import * as yup from "yup";

export const feedbackFormSchema = yup.object().shape({
    name: yup.string().required('⚠ please, fill up your name'),
    email: yup.string().required('⚠ please, fill up your email')
        .email('⚠ please, fill up a valid email address'),
    message: yup.string().required('⚠ please, enter your message')
});