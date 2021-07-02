import React from 'react'
import PopupWithForm from './PopupWithForm';

class EditAvatarPopup extends React.Component {

    constructor(props) {
        super(props)
        this.isOpen = props.isOpen;
        this.onUpdateAvatar = props.onUpdateAvatar;
        this.onClose = props.onClose;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();

        this.onUpdateAvatar({
            avatar: this.input.current.value,
        });
        console.log(this.isOpen)
        console.log(this.props.isOpen)
        this.onClose();
    }


    render() {
        return (

            <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'} isOpen={this.props.isOpen} onClose={this.onClose} onSubmit={this.handleSubmit}>
                <label className="popup__box-input-span">
                    <input ref={this.input} id="edit-avatar" defaultValue="" type="url" autoComplete="off" className="popup__input"
                        placeholder="Ссылка на фото" name="link" required />
                    <span className="popup__input-error edit-avatar-error"></span>
                </label>
            </PopupWithForm>
        )
    }
}

export default EditAvatarPopup;

