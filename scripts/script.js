// *** VARIABLES ***

// ** webpage active buttons
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddPicture = document.querySelector('.profile__add-button');
const btnsClosePopup = document.querySelectorAll('.popup__close-button');

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
const elementName = document.querySelector('.popup__input_type_element-name');
const elementLink = document.querySelector('.popup__input_type_element-link');

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

// ** Close pop-up
function closePopup(item) {
    item.classList.remove('popup_active');
}

// ** Open pop-up
function openPopup(popup) {
    popup.classList.add('popup_active');
}

// ** Showing full size picture function
function showFullSizePicture(name, link) {
    popupFullSizeImg.src = link;
    popupFullSizeTitle.textContent = name;
    popupFullSizeImg.alt = name;
    openPopup(formFullSizePicture)
}

// ** Delete photo from grid
function deleteCard(e) {
    e.target.closest('.photo-grid__item').remove()
}

// *** EVENT HANDLERS ***

// ** Getting name and link from the default array
initialCards.forEach(({name, link}) => {
    renderCard(name, link)
})

// ** Add pictures
formAddPicture.addEventListener('submit', (e) => {
    e.preventDefault()
    const link = elementLink.value;
    const name = elementName.value;
    createCard(name, link);
    elementLink.value = "";
    elementName.value = "";
    closePopup(formAddPicture);
})

// ** close pop-ups when clicking all the cross buttons
btnsClosePopup.forEach(button => {
    const popup = button.closest('.popup')
    button.addEventListener('click', () => {
        closePopup(popup)
    })
})

// ** save all changes in profile edit when click save button
formEdit.addEventListener('submit', submitProfileEdit);

// ** Open edit profile pop-up
btnEditProfile.addEventListener('click', () => {
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
    openPopup(formEdit)
});

// ** Open add picture pop-up
btnAddPicture.addEventListener('click', () => {
    openPopup(formAddPicture)
});