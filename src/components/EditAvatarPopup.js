import React from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const input = React.createRef();
    

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: input.current.value,
        });

        onClose();
    }

    return (

        <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__box-input-span">
                <input ref={input} id="edit-avatar" defaultValue="" type="url" autoComplete="off" className="popup__input"
                    placeholder="Ссылка на фото" name="link" required />
                <span className="popup__input-error edit-avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;