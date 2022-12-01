const popupBg = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job-description');
let btnOpenPopup = document.querySelector('.profile__edit-button');
let btnClosePopup = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let formElement = document.querySelector('.popup__form');

function closePopup() {
    popupBg.classList.remove('popup_active');
}

function openPopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popupBg.classList.add('popup_active');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);
btnOpenPopup.addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);