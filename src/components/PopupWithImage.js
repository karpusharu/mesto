import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popup__picture");
    this._popupTitle = this._popup.querySelector(".popup__picture-caption");
  }
  open = (name, link) => {
    this._popupImg.src = link;
    this._popupTitle.textContent = name;
    this._popupImg.alt = name;
    this._popup.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  };
}
