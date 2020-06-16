import React, {useState} from 'react'
import style from './Modal.module.css'
// @ts-ignore
import Modal from 'react-modal'
import styles from "../CardPacks.module.css";

type ModalPackType = {
    onAddDeck: () => void
}

Modal.setAppElement('#root')
const ModalOnAddPack: React.FC<ModalPackType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={style.delete_item}>
            <button className={style.delete} onClick={() => setModalIsOpen(true)}>Add Deck</button>
            {/*<button onClick={props.onAddDeck}> Add Deck</button>*/}

            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Create pack</h2>
                <input type="text" placeholder={'name user'}/>
                <input type="text" placeholder={'name pack'}/>
                <div className={style.button_modals}>
                    <button onClick={props.onAddDeck}>Create Pack</button>
                    <button onClick={() => setModalIsOpen(false)}>Cancel</button>
                    {/*<span onClick={() => setModalIsOpen(false)}>x</span>*/}
                </div>
            </Modal>
        </div>
    )
}

export default ModalOnAddPack