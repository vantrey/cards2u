import React, {useState} from 'react'
import style from './ModalWindowCard.module.css'
// @ts-ignore
import Modal from 'react-modal'
import Input from "../../../../ui/common/Input/Input_123";
import Button from "../../../../ui/common/Button/Button";

type ModalUpdateType = {
    onUpdateCard: (_id: string,question: string, answer: string) => void
    _id: string
}

Modal.setAppElement('#root')
const ModalWindowUpdateCard: React.FC<ModalUpdateType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [question, setValueQuestion] = useState('')
    const [answer, setValueAnswer] = useState('')

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'question'){
            setValueQuestion(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'answer') {
            setValueAnswer(e.currentTarget.value)
        }

    }
    const UpdateCard = () => {
        props.onUpdateCard(props._id,question, answer)
        setModalIsOpen(false)
        setValueQuestion('')
        setValueAnswer('')
    }

    return (
        <div className={style.update_Card}>
            <button className={style.update} onClick={() => setModalIsOpen(true)}>Update</button>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Change Card</h2>
                <Input name='question' type="text" placeholder={'change your question'} value={question}
                       onChange={onValueChange} register={undefined} errors={undefined}/>
                <Input name='answer' type="text" placeholder={'change your answer'} value={answer}
                       onChange={onValueChange} register={undefined} errors={undefined}/>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={UpdateCard}>Change Card</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}
export default ModalWindowUpdateCard