export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  // Проверяем каждое поле ввода на валидность.
  _checkInputValidity = (inputElement) => {
    inputElement.validity.valid
      ? this._hideInputError(inputElement)
      : this._showInputError(inputElement);
  };

  // если поле невалидно - показываем ошибку
  _showInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    this._errorElement.classList.add(this._config.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  };

  // если поле валидно - скрываем ошибку
  _hideInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    this._errorElement.classList.remove(this._config.errorClass);
    this._errorElement.textContent = "";
    inputElement.classList.remove(this._config.inputErrorClass);
  };

  // Переключает состояние кнопки, если какое-либо поле ввода невалидно
  toggleButtonState = () => {
    this._inputList.some((inputElement) => {
      if (!inputElement.validity.valid) {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    });
  };

  deleteValidationErrors = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  _setEventListeners = () => {
    this.toggleButtonState();
    // для каждого инпута проверяем валидность и в с лучае невалидности выводим ошибку
    //также проверяем состояние кнопки если все поля валидны
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}
