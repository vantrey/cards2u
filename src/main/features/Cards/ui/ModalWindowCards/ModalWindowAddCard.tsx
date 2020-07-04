import React, {useState} from 'react'
import style from './ModalWindowCard.module.css'
// @ts-ignore
import Modal from 'react-modal'
import Button from "../../../../ui/common/Button/Button_123";
import Input from "../../../../ui/common/Input/Input_123";

type ModalCardType = {
    onAddNewCard: (valueQuestion: string,
                   valueAnswer: string) => void
}

Modal.setAppElement('#root')
const ModalWindowAddCard: React.FC<ModalCardType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [valueQuestion, setValueQuestion] = useState('')
       const [valueAnswer, setValueAnswer] = useState('')

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'question'){
            setValueQuestion(e.currentTarget.value)
        }
        else if (e.currentTarget.name === 'answer') {
            setValueAnswer(e.currentTarget.value)
        }

    }
    const onAddCard = () => {
        props.onAddNewCard(valueQuestion, valueAnswer)
        setModalIsOpen(false)
        setValueQuestion('')
        setValueAnswer('')
    }

    return (
        <div className={style.add_Card}>
            <Button onClick={() => setModalIsOpen(true)} tittle={'Add'}/>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Add Card</h2>
                <Input name='question' type="text" placeholder={'enter your question'} value={valueQuestion}
                       onChange={onValueChange} register={undefined} errors={undefined}/>
                <Input name='answer' type="text" placeholder={'enter your answer'} value={valueAnswer}
                       onChange={onValueChange} register={undefined} errors={undefined}/>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={onAddCard}>Create Card</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalWindowAddCard