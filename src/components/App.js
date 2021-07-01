import React, { useEffect, useLayoutEffect, useState } from 'react';
import './../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from './../utils/api.js';
import { CurrentUserContext } from './../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((res) => { return setCurrentUser(res) })
      .catch((err) => { console.log('Ошибка: ', err) })
  }, [])


  // console.log(currentUser)


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



  function handleUpdateUser(data) {
    api.formEditDataProfile(data)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        })
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  };


  function handleUpdateAvatar(url) {
    api.changeAvatarProfile(url)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        })
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  };



  return (
    <CurrentUserContext.Provider value={currentUser}>
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />


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
    </CurrentUserContext.Provider>
  );
}

export default App;
