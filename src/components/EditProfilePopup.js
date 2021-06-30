import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

    const [name, setName] = useState()
    const [description, setDescription] = useState()


    function handleChangeName() {
        'test'
    }

    function handleChangeDescription() {
        'test'
    }

    return (
        <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'} isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
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