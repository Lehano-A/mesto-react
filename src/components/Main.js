import React from 'react';
import Card from './Card.js'
import { CurrentUserContext } from './../contexts/CurrentUserContext.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onAgreeDelete, dataFromAreYouSure, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext) // ПОДПИСКА НА КОНТЕКСТ



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

                    return (
                        <Card
                            dataFromAreYouSure={dataFromAreYouSure}
                            onCardDelete={onCardDelete}
                            onAgreeDelete={onAgreeDelete}
                            onCardLike={onCardLike}
                            onCardClick={onCardClick}
                            key={item._id}
                            {...item}
                        />)
                })}
            </section>

        </main>
    )
}

export default Main