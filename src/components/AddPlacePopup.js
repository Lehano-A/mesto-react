import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';


function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    // ОБРАБОТЧИК ПОЛЯ NAME
    function handleChangeName(e) {
        setName(e.target.value)
    }

    // ОБРАБОТЧИК ПОЛЯ LINK
    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    // ОБРАБОТЧИК SUBMIT
    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: name,
            link: link,
        })

        onClose()
    }

    return (
        <PopupWithForm title={'Новое место'} name={'add-new-card'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__box-input-span">
                <input value={name} onChange={handleChangeName} id="add-new-card-title" autoComplete="off" type="text" className="popup__input"
                    placeholder="Название" name="name" minLength="2" maxLength="30" required />
                <span className="popup__input-error add-new-card-title-error"></span>
            </label>
            <label className="popup__box-input-span">
                <input value={link} onChange={handleChangeLink} id="add-new-card-link" type="url" autoComplete="off" className="popup__input"
                    placeholder="Ссылка на картинку" name="link" required />
                <span className="popup__input-error add-new-card-link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;