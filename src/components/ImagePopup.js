import React from 'react';

function ImagePopup(props) {

    return (
        <div id="popup-open-card-image" className={`popup ${props.card.link && 'popup_opened'}`}>
            <figure className="popup__box-image-button-title">
                <img src={props.card.link} id="popup-image" className="popup__image" alt={props.card.name} />
                <button onClick={props.onClose} id="button-close-card-image" type="reset" className="popup__button-close"></button>
                <h3 id="popup-title-card-image" className="popup__title-image">{props.card.name}</h3>
            </figure>
        </div>
    )
}

export default ImagePopup;