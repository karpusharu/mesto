// *** VARIABLES ***
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// *** FUNCTIONS ***
function showInputError(formElement, inputElement, config){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
}

// *** Checks every input for its validity and shows or hides errors
function checkInputValidity(formElement, inputElement, config){
    if(inputElement.validity.valid){
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

// *** Checks inputs validity status for toggling  submit button
function hasInvalidInput (inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}
// *** Toggles submit button active status
function  toggleButtonState (inputList, buttonElement, config){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

// *** Adding event listeners to every form input field
function setEventListeners(formElement, config){
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);
// *** Deactivating submit button when resetting form
    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement, config);
        }, 0);
    });

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
}

// *** Finds every form and adds listeners to every input field with setEventListeners function
function enableValidation(config){
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, config)
    });
}

// *** Deletes validation errors when we close edit form and open it again
function deleteValidationErrors (formElement, inputList, config) {
    inputList.forEach((inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(config.inputErrorClass);
        errorElement.classList.remove(config.errorClass)
    })
}

enableValidation(validationConfig);
