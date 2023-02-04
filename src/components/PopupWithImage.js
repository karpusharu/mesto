import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popup__picture");
    this._popupTitle = this._popup.querySelector(".popup__picture-caption");
  }
  open = (name, link) => {
    super.open();
    this._popupImg.src = link;
    this._popupTitle.textContent = name;
    this._popupImg.alt = name;
  };
}
