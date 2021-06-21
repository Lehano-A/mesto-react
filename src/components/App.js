import React, { useState } from 'react';
import './../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  // ОБРАБОТЧИК КЛИКА НА КНОПКУ ПРОФАЙЛА
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // ОБРАБОТЧИК КЛИКА НА АВАТАР
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // ОБРАБОТЧИК КЛИКА НА КНОПКУ ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // ОБРАБОТЧИК КЛИКА НА КАРТИНКУ В КАРТОЧКЕ
  function handleCardClick(cardInfo) {
    setSelectedCard(cardInfo);
  }

  // ОБРАБОТЧИК ЗАКРЫТИЯ ВСЕХ ПОПАПОВ
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }


  return (

    <div className="page__container">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />


      {/* ПОПАП ПРОФИЛЯ */}
      <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__box-input-span">
          <input id="popup-name" autoComplete="off" type="text" className="popup__input" placeholder="Ваше имя"
            name="name" minLength="2" maxLength="40" required />
          <span className="popup__input-error popup-name-error"></span>
        </label>
        <label className="popup__box-input-span">
          <input id="popup-status" autoComplete="off" type="text" className="popup__input" placeholder="О себе"
            name="status" minLength="2" maxLength="200" required />
          <span className="popup__input-error popup-status-error"></span>
        </label>
      </PopupWithForm>


      {/* ПОПАП ОБНОВЛЕНИЯ АВАТАРА */}
      <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__box-input-span">
          <input id="edit-avatar" defaultValue="" type="url" autoComplete="off" className="popup__input"
            placeholder="Ссылка на фото" name="link" required />
          <span className="popup__input-error edit-avatar-error"></span>
        </label>
      </PopupWithForm>


      {/* ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ */}
      <PopupWithForm title={'Новое место'} name={'add-new-card'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__box-input-span">
          <input id="add-new-card-title" defaultValue="" autoComplete="off" type="text" className="popup__input"
            placeholder="Название" name="name" minLength="2" maxLength="30" required />
          <span className="popup__input-error add-new-card-title-error"></span>
        </label>
        <label className="popup__box-input-span">
          <input id="add-new-card-link" defaultValue="" type="url" autoComplete="off" className="popup__input"
            placeholder="Ссылка на картинку" name="link" required />
          <span className="popup__input-error add-new-card-link-error"></span>
        </label>
      </PopupWithForm>


      {/* ПОПАП - ВЫ УВЕРЕНЫ? */}
      <PopupWithForm title={'Вы уверены?'} name={'are-you-sure'}>
      </PopupWithForm>


    </div>
  );
}

export default App;
