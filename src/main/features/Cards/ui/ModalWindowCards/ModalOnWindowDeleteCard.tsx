import React, {useState} from 'react'
import style from './Modal.module.css'
// @ts-ignore
import Modal from 'react-modal'

type ModalPackType = {
    deletePacksCards: (cardsPackId: string) => void
    user_id: string
    id: string
}

Modal.setAppElement('#root')
const ModalonADDPack: React.FC<ModalPackType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={style.delete_item}>
            <span className={style.delete} onClick={() => setModalIsOpen(true)}>💣</span>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Delete item</h2>
                <div>Are you sure you want to delete this item?</div>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={() => props.deletePacksCards(props.id)}>Yes</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>No</button>
                    {/*<span onClick={() => setModalIsOpen(false)}>x</span>*/}
                </div>
            </Modal>
        </div>
    )
}

export default ModalonADDPack