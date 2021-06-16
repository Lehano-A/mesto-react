import React from 'react';


function Main({onEditProfile, onAddPlace, onEditAvatar }) {

    return (
        <main>

            <section className="profile">
                <div className="profile__info-container">

                    <div className="profile__photo-box">
                        <div onClick={onEditAvatar} className="profile__icon-edit"></div>
                        <img className="profile__photo" alt="Ваше фото" />
                    </div>

                    <div className="profile__info">
                        <div className="profile__name-button-box">
                            <h1 className="profile__name"></h1>
                            <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__status"></p>
                    </div>
                </div>

                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>

            <section className="elements">
            </section>

        </main>
    )
}

export default Main