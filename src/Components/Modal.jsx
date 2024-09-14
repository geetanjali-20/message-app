
import React from 'react'
import style from "../Styles/Modal.module.css"

const Modal = ({children, isOpen , onChangeClose}) => {
  return (
    <>
    <div className={style.backdrop} onClick={onChangeClose}/>
    <dialog className={style.modal} open={isOpen}>
        {children}
    </dialog>
    </>
    
  )
}

export default Modal