class Card {
    constructor(data, template, handleClick) {
        this._data = data;
        this._template = template;
        this._handleClick = handleClick;
    }
// ** create photo card element
    generateCard = () => {
        this._element = this._template.cloneNode(true);
        this._cardImg = this._element.querySelector('.photo-grid__picture');
        this._cardTitle = this._element.querySelector('.photo-grid__item-capture');
        this._btnLikeCard = this._element.querySelector('.photo-grid__like-button');
        this._btnDeleteCard = this._element.querySelector('.photo-grid__delete-picture');
        this._fillData();
        this._setEventListeners();
        return this._element;
    }

    _fillData = () => {
        this._cardTitle.textContent = this._data.name;
        this._cardImg.src = this._data.link;
        this._cardImg.alt = this._data.name;
    }

    _setEventListeners = () => {
        this._btnLikeCard.addEventListener('click', this._like);
        this._btnDeleteCard.addEventListener('click', this._delete);
        this._cardImg.addEventListener('click', () => this._handleClick(this._data.name, this._data.link));
    }

    _like = () => {
        this._btnLikeCard.classList.toggle('photo-grid__like-button_active');
    }

    _delete = () => {
        this._btnDeleteCard.closest('.photo-grid__item').remove()
    }
}
export {Card};