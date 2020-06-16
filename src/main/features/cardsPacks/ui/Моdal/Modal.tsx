import React, {useState} from 'react'
import style from './Modal.module.css'
// @ts-ignore
import Modal from 'react-modal'

type ModalPackType = {
    deletedPacksCards: (cardsPackId: string) => void
    user_id: string
    id: string
}

Modal.setAppElement('#root')
const Modals: React.FC<ModalPackType> = (props) => {
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
                    <button onClick={() => props.deletedPacksCards(props.id)}>Да</button>
                    <button onClick={() => setModalIsOpen(false)}>Нет</button>
                    {/*<span onClick={() => setModalIsOpen(false)}>x</span>*/}
                </div>
            </Modal>
        </div>
    )
}

export default Modals