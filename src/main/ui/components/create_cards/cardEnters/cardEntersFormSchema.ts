import * as yup from "yup";

export const cardEntersFormSchema = yup.object().shape({
    question: yup.string().required('⚠ please, fill up your question'),
    answer: yup.string().required('⚠ please, fill up your answer')
});