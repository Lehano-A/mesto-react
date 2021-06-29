import React, { useState, useEffect } from 'react';
import api from './../utils/api.js';
import Card from './Card.js'
import { CurrentUserContext } from './../contexts/CurrentUserContext.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, ComponentCard }) {

    const currentUser = React.useContext(CurrentUserContext) // ПОДПИСКА НА КОНТЕКСТ
    const [cards, setCards] = useState([])
    

    // ПОЛУЧЕНИЕ ДАННЫХ КАРТОЧКИ ОТ СЕРВЕРА
    useEffect(() => {
        api.getDataInitialCards()
            .then((result) => {
                setCards(result)
            })
            .catch((err) => { console.log('Ошибка: ', err) })
    }, [])


    // ОБРАБОТЧИК ЛАЙКА
    function handleCardLike(card) {

        const isLiked = card.likes.some((profile) => { return profile._id === currentUser._id });

        if (isLiked === true) {
            api.deleteLikes(card._id)

                .then((targetCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? targetCard : c))
                });

        } else {
            api.plusNumberLikes(card._id)
                .then((targetCard) => {
                    setCards((cards) => cards.map((c) => c._id === card._id ? targetCard : c))

                });
        }
    }


    return (
        <main>

            <section className="profile">
                <div className="profile__info-container">

                    <div className="profile__photo-box">
                        <div onClick={onEditAvatar} className="profile__icon-edit"></div>
                        <img className="profile__photo" src={currentUser.avatar} alt="Ваше фото" />
                    </div>

                    <div className="profile__info">
                        <div className="profile__name-button-box">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__status">{currentUser.about}</p>
                    </div>
                </div>

                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>

            <section className="elements">
                {/* ИТЕРИРУЕМ ПОЛУЧЕННЫЙ МАССИВ КАРТОЧЕК С СЕРВЕРА
            ОТПРАВЛЕМ В КОМПОНЕНТ Card В СОСТАВЕ КАЖДОЙ КАРТОЧКИ НЕОБХОДИМЫЕ ПРОПСЫ
            ПРИ СРАБАТЫВАНИИ ОБРАБОТЧИКА onCardClick В Card, ПОЛУЧАЕМ ОТТУДА ДАННЫЕ КАРТОЧКИ
            И ОТПРАВЛЯЕМ ИХ В КОМПОНЕНТ App, ЧТОБЫ ПЕРЕДАТЬ ИХ В КОМПОНЕНТ ImagePopup */}
                {cards.map((item) => {
                    {/* console.log(item) */ }
                    return (<Card onCardLike={handleCardLike} onCardClick={onCardClick} key={item._id} {...item} />)
                })}
            </section>

        </main>
    )
}

export default Main