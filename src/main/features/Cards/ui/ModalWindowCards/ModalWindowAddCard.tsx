import React, {useState} from 'react'
import style from './ModalWindowCard.module.css'
// @ts-ignore
import Modal from 'react-modal'

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
            <button className={style.add} onClick={() => setModalIsOpen(true)}>Add</button>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Add Card</h2>
                <input name='question' type="text" placeholder={'enter your question'} value={valueQuestion}
                       onChange={onValueChange}/>
                <input name='answer' type="text" placeholder={'enter your answer'} value={valueAnswer}
                       onChange={onValueChange}/>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={onAddCard}>Create Card</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalWindowAddCard