const popupBg = document.querySelector('.popup');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job-description');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');

function closePopup() {
    popupBg.classList.remove('popup_active');
}

function openPopup() {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    popupBg.classList.add('popup_active');
}

let formElement = document.querySelector('.popup__main');
let nameInput = document.querySelector('.popup__input_type-name');
let jobInput = document.querySelector('.popup__input_type-job');


function handleFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);