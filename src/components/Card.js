import React, { useState } from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext.js'

function Card(props) { //props - это данные одной карточки

    const currentUser = React.useContext(CurrentUserContext); // ПОДПИСКА НА КОНТЕКСТ


    // console.log(props)
    // ПРОВЕРКА НА ВЛАДЕНИЕ КАРТОЧКОЙ
    const isOwn = props.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__button-delete ${isOwn && 'element__delete-button_active'}`
    )

    // console.log(isOwn)

    // ПРОВЕРКА НА ЛАЙК
    const isLiked = props.likes.some((item) => { return item._id === currentUser._id });
    const cardLikeButtonClassName = (
        `element__button-like ${isLiked && 'element__button-like_active'}`
    );

    console.log(isLiked)

    function handleClick() {
        props.onCardClick(props)
    }

    function handleLikeClick() {
        props.onCardLike(props) // функция handleCardLike из Main
        // event.target.classList.toggle('element__button-like_active')
    }


    return (<article key={props._id} className="element">
        <img onClick={handleClick} src={props.link} className="element__image" alt={props.name} />
        <button className={cardDeleteButtonClassName}></button>
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