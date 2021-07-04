import React, { useEffect, useState } from 'react';
import './../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import api from './../utils/api.js';
import { CurrentUserContext } from './../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import AreYouSurePopup from './AreYouSurePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isAreYouSurePopupOpen, setIsAreYouSurePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [dataCardFromAreYouSure, setDataCardFromAreYouSure] = useState({})

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([])


  // ПОЛУЧЕНИЕ ДАННЫХ ПРОФАЙЛА ОТ СЕРВЕРА
  useEffect(() => {
    api.getUserInfo()
      .then((res) => { return setCurrentUser(res) })
      .catch((err) => { console.log('Ошибка: ', err) })
  }, []);


  // ПОЛУЧЕНИЕ ДАННЫХ КАРТОЧКИ ОТ СЕРВЕРА
  useEffect(() => {
    api.getDataInitialCards()
      .then((result) => {
        setCards(result)
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  }, []);



  // ОБРАБОТЧИК КЛИКА НА КНОПКУ ПРОФАЙЛА
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };


  // ОБРАБОТЧИК КЛИКА НА АВАТАР
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };


  // ОБРАБОТЧИК КЛИКА НА КНОПКУ ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };


  // ОБРАБОТЧИК КЛИКА НА КАРТИНКУ В КАРТОЧКЕ
  function handleCardClick(cardInfo) {
    setSelectedCard(cardInfo);
  };


  // ОБРАБОТЧИК ЗАКРЫТИЯ ВСЕХ ПОПАПОВ
  function closeAllPopups() {

    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsAreYouSurePopupOpen(false);
    setSelectedCard({});
  };


  // ОБАБОТЧИК ОБНОВЛЕНИЯ ДАННЫХ ПРОФАЙЛА
  function handleUpdateUser(data) {
    api.formEditDataProfile(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  };


  // ОБРАБОТЧИК ОБНОВЛЕНИЯ АВАТАРА
  function handleUpdateAvatar(url) {
    api.changeAvatarProfile(url)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  };


  // ОБРАБОТЧИК ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
  function handleAddPlaceSubmit(data, setName, setLink) {

    api.sendDataNewCardAtServer(data)
      .then((res) => {

        setCards([res, ...cards])
        closeAllPopups();
        setName('');
        setLink('');
      })
      .catch((err) => { console.log('Ошибка: ', err) })
  };


  // ОБРАБОТЧИК ЛАЙКА/ДИЗЛАЙКА
  function handleCardLike(card) {
    //ПРОВЕРКА ЦЕЛЕВОЙ КАРТОЧКИ НА НАЛИЧИЕ МОЕГО ЛАЙКА
    const isLiked = card.likes.some((profile) => { return profile._id === currentUser._id });

    // ЕСЛИ ЛАЙК УЖЕ ЕСТЬ, ТО ЕГО УБИРАЕМ
    if (isLiked === true) {
      const apiLike = api.deleteLikes(card._id)
      apiLikeDislike(apiLike, card)

      // ЕСЛИ ЛАЙКА НЕТ, ТО ЕГО ДОБАВЛЯЕМ
    } else {
      const apiDislike = api.plusNumberLikes(card._id)
      apiLikeDislike(apiDislike, card)
    }
  };


  //ЗАПРОС К СЕРВЕРУ НА ЛАЙК/ДИЗЛАЙК (ШАБЛОН) 
  function apiLikeDislike(urlApi, card) {
    urlApi
      .then((targetCard) => {
        setCards(cards.map((cardFromArray) => cardFromArray._id === card._id ? targetCard : cardFromArray))
      })
      .catch((err) => { console.log('Ошибка: ', err) })

  };


  // ОБРАБОТЧИК УДАЛЕНИЯ КАРТОЧКИ
  function handleCardDelete(card) {

    const isOwn = card.owner._id === currentUser._id;

    if (isOwn === true) {
      api.deleteCardFromServer(card._id)
        .then(() => {
          setCards(cards.filter((cardFromArray) => cardFromArray._id !== card._id))
          closeAllPopups();
        })
        .catch((err) => { console.log('Ошибка: ', err) })
    }
  };


  // ОБРАБОТЧИК ОТКРЫТИЯ ПОПАПА "ВЫ УВЕРЕНЫ?"
  function handleAreYouSure() {
    setIsAreYouSurePopupOpen(true)
  }


  // ДАННЫЕ КАРТОЧКИ ПОЛУЧЕННЫЕ ИЗ Card ПРИ ОТКРЫТИИ ПОПАПА AreYouSure
  function handleDataAreYouSure(data) {
    setDataCardFromAreYouSure(data)
  }


  // ОБРАБОТЧИК УДАЛЕНИЯ КАРТОЧКИ ЧЕРЕЗ AreYouSure
  function handleCardDeleteAreYouSure() {
    dataCardFromAreYouSure.onCardDelete(dataCardFromAreYouSure)
    setDataCardFromAreYouSure({})
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAgreeDelete={handleAreYouSure}
          dataFromAreYouSure={handleDataAreYouSure}
        />

        <Footer
        />

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

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <AreYouSurePopup
          isOpen={isAreYouSurePopupOpen}
          onClose={closeAllPopups}
          onDelete={handleCardDeleteAreYouSure}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
