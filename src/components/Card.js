import React, { useState } from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext.js'

function Card(props) { //props - это данные одной карточки + другие переданные пропсы из Main

    const currentUser = React.useContext(CurrentUserContext); // ПОДПИСКА НА КОНТЕКСТ

  

    // ПРОВЕРКА НА ВЛАДЕНИЕ КАРТОЧКОЙ
    const isOwn = props.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__button-delete ${isOwn && 'element__button-delete_active'}`
    )


    // ПРОВЕРКА НА ЛАЙК
    const isLiked = props.likes.some((item) => { return item._id === currentUser._id });
    const cardLikeButtonClassName = (
        `element__button-like ${isLiked && 'element__button-like_active'}`
    );

    function handleClick() {
        props.onCardClick(props) // функция handleCardClick из App
    }

    function handleLikeClick() {
        props.onCardLike(props) // функция handleCardLike из Main
    }


    function handleDeleteClick() {
        props.onCardDelete(props) // функция handleCardDelete из Main
    }

    return (<article key={props._id} className="element">
        <img onClick={handleClick} src={props.link} className="element__image" alt={props.name} />
        <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
        <div className="element__title-icon-box">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__number-like-box">
                <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
                <p className="element__total-likes">{props.likes.length}</p>
            </div>
        </div>
    </article>)
}

export default Card;