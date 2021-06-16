import React from 'react';
import './../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {


  function handleEditAvatarClick() {
    const editAvatar = document.querySelector('.popup_type_edit-avatar');
    editAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const editProfile = document.querySelector('.popup_type_edit-profile');
    editProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const addPlace = document.querySelector('.popup_type_add-new-card');
    addPlace.classList.add('popup_opened');
  }



  function isEditProfilePopupOpen() {
 
  }

  function isAddPlacePopupOpen() {

  }

  function isEditAvatarPopupOpen() {

  }



  return (

    <div className="page__container">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />



      {/* ПОПАП ПРОФИЛЯ */}
      <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'}>
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

      {/* ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ */}
      <PopupWithForm title={'Новое место'} name={'add-new-card'}>
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


      {/* ПОПАП ОБНОВЛЕНИЯ АВАТАРА */}
      <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'}>
        <label className="popup__box-input-span">
          <input id="edit-avatar" defaultValue="" type="url" autoComplete="off" className="popup__input"
            placeholder="Ссылка на фото" name="link" required />
          <span className="popup__input-error edit-avatar-error"></span>
        </label>
      </PopupWithForm>


      {/* ПОПАП - ВЫ УВЕРЕНЫ? */}
      <PopupWithForm title={'Вы уверены?'} name={'are-you-sure'}>
      </PopupWithForm>












      {/* <div id="popup-add-new-card" className="popup">
        <div id="window-add-new-card" className="popup__window">
          <button id="add-new-card-button-close" type="reset" className="popup__button-close"></button>
          <h3 className="popup__title">Новое место</h3>
          <form id="form-add-new-card" className="popup__form" method="POST" name="formPopupAddNewCard" noValidate>
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
            <button type="submit" className="popup__button-save">Создать</button>
          </form>
        </div>
      </div>
 */}





      {/* 
      <div id="popup-open-profile" className="popup">
        <div id="window-popup-profile" className="popup__window">
          <button type="reset" id="popup-profile-button-close" className="popup__button-close"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form id="form-profile" className="popup__form" method="POST" name="formPopup" noValidate>
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
            <button type="submit" className="popup__button-save">Сохранить</button>
          </form>
        </div>

      </div>
 */}
















      {/*    <div id="popup-edit-avatar-profile" className="popup">
        <div id="window-edit-avatar" className="popup__window">
          <button id="edit-avatar-button-close" type="reset" className="popup__button-close"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form id="form-edit-avatar" className="popup__form" method="POST" name="formPopupEditAvatar" noValidate>
            <label className="popup__box-input-span">
              <input id="edit-avatar" defaultValue="" type="url" autoComplete="off" className="popup__input"
                placeholder="Ссылка на фото" name="link" required />
              <span className="popup__input-error edit-avatar-error"></span>
            </label>
            <button type="submit" className="popup__button-save">Сохранить</button>
          </form>
        </div>
      </div> */}




      {/*    <div id="popup-are-you-sure" className="popup">
        <div id="window-are-you-sure" className="popup__window">
          <button id="are-you-sure-button-close" type="reset" className="popup__button-close"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <form id="form-are-you-sure" className="popup__form" name="formPopupAreYouSure" noValidate>
            <button id="are-you-sure-button-accept" className="popup__button-save">Да</button>
          </form>
        </div>
      </div> */}




      <template className="template-element">
        <article className="element">
          <img src="#" className="element__image" alt="#" />
          <button className="element__button-delete"></button>
          <div className="element__title-icon-box">
            <h2 className="element__title"></h2>
            <div className="element__number-like-box">
              <button type="button" className="element__button-like"></button>
              <p className="element__total-likes"></p>
            </div>
          </div>
        </article>
      </template>

    </div>




  );
}

export default App;
