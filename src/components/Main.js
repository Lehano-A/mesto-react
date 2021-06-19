import React, { useState, useEffect } from 'react';
import api from './../utils/api.js';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, ComponentCard }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])


    // ПОЛУЧЕНИЕ ДАННЫХ ПРОФАЙЛА ОТ СЕРВЕРА
    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar)
            })
            .catch((err) => { console.log('Ошибка: ', err) })
    })


    //ПОЛУЧЕНИЕ ДАННЫХ КАРТОЧКИ ОТ СЕРВЕРА
    useEffect(() => {
        api.getDataInitialCards()
            .then((cards) => {
                setCards(cards)

            })
            .catch((err) => { console.log('Ошибка: ', err) })
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
                    return (<ComponentCard onCardClick={onCardClick} key={item._id} {...item} />)
                })}
            </section>

        </main>
    )
}

export default Main