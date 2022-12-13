// *** VARIABLES ***

// ** default pictures
const initialCards = [
    {name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
    {name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
    {name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
    {name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
    {name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
    {name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
];
// ** webpage active buttons
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnSaveProfileEdit = document.querySelector('.popup__save-profile-edit');
const btnAddPicture = document.querySelector('.profile__add-button');
const btnSaveAddingPicture = document.querySelector('.popup__save-element');
const btnsClosePopup = document.querySelectorAll('.popup__close-button');

// ** pop-up forms
const editForm = document.querySelector('.popup_type_edit-profile');
const addPictureForm = document.querySelector('.popup_type_add-picture');
const fullSizePictureForm = document.querySelector('.popup_type_full-size-picture');

// ** profile edit fields
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job-description');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

// ** add picture fields
let elementName = document.querySelector('.popup__input_type_element-name');
let elementLink = document.querySelector('.popup__input_type_element-link');

// ** photo grid variables
const photoGridContainer = document.querySelector('.photo-grid');
const photoTemplate = document.getElementById('photo-item-template').content.querySelector('.photo-grid__item');
const popupFullSizeImg = document.querySelector('.popup__picture');
const popupFullSizeTitle = document.querySelector('.popup__picture-caption');


// *** FUNCTIONS ***

// ** Add element to photo-grid
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
    // ** like button **
    btnLike.addEventListener('click', () => {
        btnLike.classList.toggle('photo-grid__like-button_active')
    });
    // ** delete picture **
    btnDeleteElement.addEventListener('click', deleteCard);
    photoGridContainer.prepend(cardElement);
}

// ** Submit profile edit info
function submitProfileEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(editForm);
}

// ** Close pop-up
function closePopup(item) {
    item.classList.remove('popup_active');
}

// ** Open pop-up
function openPopup(e) {
    e.classList.add('popup_active');
}

// ** Showing full size picture function
function showFullSizePicture(name, link) {
    popupFullSizeImg.src = link;
    popupFullSizeTitle.textContent = name;
    openPopup(fullSizePictureForm)
}

// ** Delete photo from grid
function deleteCard(e) {
    e.target.closest('.photo-grid__item').remove()
}

// *** EVENT HANDLERS ***

// ** Getting name and link from the default array
initialCards.forEach(({name, link}) => {
    createCard(name, link)
})

// ** Add pictures
btnSaveAddingPicture.addEventListener('click', (e) => {
    e.preventDefault()
    const link = elementLink.value;
    const name = elementName.value;
    createCard(name, link);
    elementLink.value = "";
    elementName.value = "";
    closePopup(addPictureForm);
})

// ** close pop-ups when clicking all the cross buttons
btnsClosePopup.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

// ** save all changes in profile edit when click save button
btnSaveProfileEdit.addEventListener('click', submitProfileEdit);

// ** Open edit profile pop-up
btnEditProfile.addEventListener('click', () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(editForm)
});

// ** Open add picture pop-up
btnAddPicture.addEventListener('click', () => {
    openPopup(addPictureForm)
});