import React from 'react';
import PopupWithForm from './PopupWithForm.js';


function AreYouSurePopup({ isOpen, onClose, onDelete }) {


    function handleSubmit(e) {
        e.preventDefault();
        onDelete();
        onClose();
    }

    return (
        <PopupWithForm title={'Вы уверены?'} name={'are-you-sure'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        </PopupWithForm>
    )

}

export default AreYouSurePopup;