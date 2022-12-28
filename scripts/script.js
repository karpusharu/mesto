// *** VARIABLES ***
const popupList = document.querySelectorAll('.popup');
// ** webpage active buttons
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddPicture = document.querySelector('.profile__add-button');

// ** pop-up forms
const formEdit = document.querySelector('.popup_type_edit-profile');
const inputsEditForm = Array.from(formEdit.querySelectorAll('.popup__input'));
const btnSubmitEditForm = formEdit.querySelector('.popup__button-profile-edit');

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
const photoTemplate = document.getElementById('photo-item-template').content.querySelector('.photo-grid__item');
const popupFullSizeImg = document.querySelector('.popup__picture');
const popupFullSizeTitle = document.querySelector('.popup__picture-caption');

// *** FUNCTIONS ***
// ** create photo card element
function createCard(name, link) {
    const cardElement = photoTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector('.photo-grid__picture');
    const cardTitle = cardElement.querySelector('.photo-grid__item-capture');
    const btnLike = cardElement.querySelector('.photo-grid__like-button');
    const btnDeleteElement = cardElement.querySelector('.photo-grid__delete-picture');
    // ** open full-size picture **
    cardImg.addEventListener('click', () => showFullSizePicture(name, link));
    cardImg.src = link;
    cardTitle.textContent = name;
    cardImg.alt = name;
    // ** like button **
    btnLike.addEventListener('click', () => {
        btnLike.classList.toggle('photo-grid__like-button_active')
    });
    // ** delete picture **
    btnDeleteElement.addEventListener('click', deleteCard);
    return cardElement;
}

// ** Add element to photo-grid
function renderCard(name, link){
    photoGridContainer.prepend(createCard(name, link));
}

// ** Submit profile edit info
function submitProfileEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputJob.value;
    closePopup(formEdit);
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

// ** Showing full size picture function
function showFullSizePicture(name, link) {
    popupFullSizeImg.src = link;
    popupFullSizeTitle.textContent = name;
    popupFullSizeImg.alt = name;
    openPopup(formFullSizePicture)
}

// ** Delete photo from grid
function deleteCard(evt) {
    evt.target.closest('.photo-grid__item').remove()
}

// *** EVENT HANDLERS ***

// ** Getting name and link from the default array
initialCards.forEach(({name, link}) => {
    renderCard(name, link)
})

// ** Add pictures
formAddPicture.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const link = inputPictureLink.value;
    const name = inputPictureName.value;
    renderCard(name, link);
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
formEdit.addEventListener('submit', submitProfileEdit);

// ** Open edit profile pop-up
btnEditProfile.addEventListener('click', () => {
    deleteValidationErrors(formEdit, inputsEditForm, validationConfig);
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
    toggleButtonState(inputsEditForm, btnSubmitEditForm, validationConfig);
    openPopup(formEdit)
});

// ** Open add picture pop-up
btnAddPicture.addEventListener('click', () => {
    openPopup(formAddPicture)
});
