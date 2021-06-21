import React, { useState, useEffect } from 'react';
import api from './../utils/api.js';
import Card from './Card.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, ComponentCard }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])


    // ПОЛУЧЕНИЕ ДАННЫХ ПРОФАЙЛА И ДАННЫХ КАРТОЧКИ ОТ СЕРВЕРА
    useEffect(() => {



        Promise.all([api.getUserInfo(), api.getDataInitialCards()])
            .then((result) => {

                const userInfo = result[0];
                const dataInitialCards = result[1]

                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar)
                setCards(dataInitialCards)
            })
    }, [])




    return (
        <main>

            <section className="profile">
                <div className="profile__info-container">

                    <div className="profile__photo-box">
                        <div onClick={onEditAvatar} className="profile__icon-edit"></div>
                        <img className="profile__photo" src={userAvatar} alt="Ваше фото" />
                    </div>

                    <div className="profile__info">
                        <div className="profile__name-button-box">
                            <h1 className="profile__name">{userName}</h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__status">{userDescription}</p>
                    </div>
                </div>

                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>

            <section className="elements">
                {/* ИТЕРИРУЕМ ПОЛУЧЕННЫЙ МАССИВ КАРТОЧЕК С СЕРВЕРА
            ОТПРАВЛЕМ В КОМПОНЕНТ Card В СОСТАВКЕ КАЖДОЙ КАРТОЧКИ НЕОБХОДИМЫЕ ПРОПСЫ
            ПРИ СРАБАТЫВАНИИ ОБРАБОТЧИКА onCardClick В Card, ПОЛУЧАЕМ ОТТУДА ДАННЫЕ КАРТОЧКИ
            И ОТПРАВЛЯЕМ ИХ В КОМПОНЕНТ App, ЧТОБЫ ПЕРЕДАТЬ ИХ В КОМПОНЕНТ ImagePopup */}
                {cards.map((item) => {
                    return (<Card onCardClick={onCardClick} key={item._id} {...item} />)
                })}
            </section>

        </main>
    )
}

export default Main