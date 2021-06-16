import React from 'react'


function handleSubmit(evt) {
    evt.preventDefault();
}


function PopupWithForm({ title, name, children }) {

    function handleClosePopup() {
        const anyPopup = document.querySelector(`.popup_type_${name}`);
        anyPopup.classList.remove('popup_opened');
    }

    return (

        <div className={`popup popup_type_${name}`}>

            <div className="popup__window">
                <button onClick={handleClosePopup} type="reset" className="popup__button-close"></button>
                <h3 className="popup__title">{title}</h3>

                <form onSubmit={handleSubmit} className="popup__form" method="POST" name={name} noValidate>
                    {children}
                    <button type="submit" className="popup__button-save">Сохранить</button>
                </form>

            </div>
        </div>

    )
}

export default PopupWithForm;