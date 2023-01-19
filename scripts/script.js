// *** IMPORTS ***
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards, validationConfig} from "./constants.js";

// *** VARIABLES ***
const popupList = document.querySelectorAll('.popup');
// ** webpage active buttons
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddPicture = document.querySelector('.profile__add-button');

// ** pop-up forms
const formEdit = document.querySelector('.popup_type_edit-profile');

const formAddPicture = document.querySelector('.popup_type_add-picture');
const formFullSizePicture = document.querySelector('.popup_type_full-size-picture');

// ** profile edit fields
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job-description');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

// ** add picture fields
const inputPictureName = document.querySelector('.popup__input_type_element-name');
const inputPictureLink = document.querySelector('.popup__input_type_element-link');

// ** photo grid variables
const photoGridContainer = document.querySelector('.photo-grid');
const popupFullSizeImg = document.querySelector('.popup__picture');
const popupFullSizeTitle = document.querySelector('.popup__picture-caption');

// ** FormValidator class instances
const profileFormValidation = new FormValidator(validationConfig, formEdit);
const cardFormValidation = new FormValidator(validationConfig, formAddPicture);


// ** Enable forms validation
profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
// *** FUNCTIONS ***
//** insert card to grid container
function insertCard (container, card) {
    container.prepend(createCard(card));
}
// ** open full size picture popup when clicking on card
function handleCardClick (name, link){
    popupFullSizeImg.src = link;
    popupFullSizeTitle.textContent = name;
    popupFullSizeImg.alt = name;
    openPopup(formFullSizePicture)
}

// ** create photo card element
function createCard (card) {
    return new Card(card, 'photo-item-template', handleCardClick).generateCard();
}

// ** Close active popup when pressing Escape button
function closePopupEscape (evt) {
    if(evt.key === 'Escape'){
        popupList.forEach(popup => {
            if(popup.classList.contains('popup_active')) {
                closePopup(popup)
            }
        })
    }
}

// ** Open pop-up
function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupEscape);
}

// ** Close pop-up
function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupEscape);
}

// *** EVENT HANDLERS ***
// ** generate cards from initialCards array and adding to DOM
initialCards.forEach(card => insertCard(photoGridContainer, card));

// ** Add element to photo-grid
formAddPicture.addEventListener('submit', (evt) => {
    evt.preventDefault();

    insertCard(photoGridContainer,{name:inputPictureName.value, link:inputPictureLink.value});
    evt.target.reset();
    closePopup(formAddPicture);
})

// ** close pop-ups when clicking all the cross buttons and overlays
popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup)
        }
    })
})

// ** save all changes in profile edit when click save button
formEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputJob.value;
    closePopup(formEdit);
});

// ** Open edit profile pop-up
btnEditProfile.addEventListener('click', () => {
    profileFormValidation.deleteValidationErrors();
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
    profileFormValidation.disableSubmitButton();
    openPopup(formEdit)
});

// ** Open add picture pop-up
btnAddPicture.addEventListener('click', () => {
    openPopup(formAddPicture)
});
