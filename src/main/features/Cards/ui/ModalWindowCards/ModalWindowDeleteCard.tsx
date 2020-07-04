import React, {useState} from 'react'
import style from './ModalWindowCard.module.css'
// @ts-ignore
import Modal from 'react-modal'

type ModalDeleteType = {
    onDeleteCard: (_id: string) => void
    _id: string
}

Modal.setAppElement('#root')
const ModalWindowDeleteCard: React.FC<ModalDeleteType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={style.delete_Card}>
            <button className={style.delete} onClick={() => setModalIsOpen(true)}>Delete</button>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Delete item</h2>
                <div>Are you sure you want to delete this item?</div>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={() => props.onDeleteCard(props._id)}>Yes</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>No</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalWindowDeleteCard