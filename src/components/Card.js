import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props)
    }

    return (<article key={props._id} className="element">
        <img onClick={handleClick} src={props.link} className="element__image" alt={props.name} />
        <button className="element__button-delete"></button>
        <div className="element__title-icon-box">
            <h2 className="element__title">{props.name}</h2>
            <div className="element__number-like-box">
                <button type="button" className="element__button-like"></button>
                <p className="element__total-likes">{props.likes.length}</p>
            </div>
        </div>
    </article>)
}

export default Card;