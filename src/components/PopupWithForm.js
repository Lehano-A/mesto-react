import React from 'react'

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit}) {

 
    return (

        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} >

            <div className="popup__window">
                <button onClick={onClose} type="reset" className="popup__button-close"></button>
                <h3 className="popup__title">{title}</h3>

                <form onSubmit={onSubmit} className="popup__form" method="POST" name={name} noValidate>
                    {/* children - ВСТАВЛЯЕТ НУЖНОЕ КОЛИЧЕСТВО ПОЛЕЙ ДЛЯ ОПРЕДЕЛЁННОЙ ФОРМЫ */}
                    {children}
                    <button type="submit" className="popup__button-save">Сохранить</button>
                </form>

            </div>
        </div>

    )
}

export default PopupWithForm;


