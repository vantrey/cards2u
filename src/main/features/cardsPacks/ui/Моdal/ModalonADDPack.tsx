import React, {useState} from 'react'
import style from './Modal.module.css'
// @ts-ignore
import Modal from 'react-modal'

type ModalPackType = {
    onAddDeck: (name:string) => void
}

Modal.setAppElement('#root')
const ModalOnAddPack: React.FC<ModalPackType> = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [value, setValue] = useState('')
    const onValueChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    const onAddDeck = () => {
        props.onAddDeck(value)
        setModalIsOpen(false)
        setValue('')
    }
    // const button = props.onAddDeck & setModalIsOpen(false)
    return (
        <div className={style.delete_item}>
            <button className={style.delete} onClick={() => setModalIsOpen(true)}>Add Deck</button>
            <Modal
                className={style.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Add pack</h2>
                <input type="text" placeholder={'name pack'} value={value} onChange={onValueChange}/>
                <div className={style.button_modals}>
                    <button className={style.button_yes_no} onClick={onAddDeck}>Create Pack</button>
                    <button className={style.button_yes_no} onClick={() => setModalIsOpen(false)}>Cancel</button>
                    {/*<span onClick={() => setModalIsOpen(false)}>x</span>*/}
                </div>
            </Modal>
        </div>
    )
}

export default ModalOnAddPack