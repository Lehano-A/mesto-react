import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from './../contexts/CurrentUserContext.js'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext)
console.log(currentUser)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')



    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {

        e.preventDefault();

        onUpdateUser({ //функция handleUpdateUser из App 
            name,
            about: description,
        });

        onClose();
    }


    // ЗНАЧЕНИЕ ПОЛЕЙ ИМЕНИ И ОПИСАНИЯ ПРОФИЛЯ - ПО УМОЛЧАНИЮ
    useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])


    return (
        <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__box-input-span">
                <input value={name} onChange={handleChangeName} id="popup-name" autoComplete="off" type="text" className="popup__input" placeholder="Ваше имя"
                    name="name" minLength="2" maxLength="40" required />
                <span className="popup__input-error popup-name-error"></span>
            </label>
            <label className="popup__box-input-span">
                <input value={description} onChange={handleChangeDescription} id="popup-status" autoComplete="off" type="text" className="popup__input" placeholder="О себе"
                    name="status" minLength="2" maxLength="200" required />
                <span className="popup__input-error popup-status-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;