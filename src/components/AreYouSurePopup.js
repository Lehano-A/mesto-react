import React from 'react';
import PopupWithForm from './PopupWithForm.js';


function AreYouSurePopup({ isOpen, onClose, onDelete }) {


    function handleSubmit(e) {
        e.preventDefault();
        onDelete();
    }

    return (
        <PopupWithForm buttonText='Удалить' title='Вы уверены?' name={'are-you-sure'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        </PopupWithForm>
    )

}

export default AreYouSurePopup;