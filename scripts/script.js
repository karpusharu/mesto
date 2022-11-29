let popupBg = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');

function closePopup(){
    popupBg.classList.remove('popup_active');
}

function openPopup(){
    popupBg.classList.add('popup_active');
}

openPopupButton.addEventListener('click', openPopup);

closePopupButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__main');
    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_job');

    function handleFormSubmit (evt) {
        evt.preventDefault();
        let name = document.querySelector('.profile__name');
        let job = document.querySelector('.profile__job-description');
        name.textContent = nameInput.value;
        job.textContent = jobInput.value;
        closePopup();
    }
formElement.addEventListener('submit', handleFormSubmit);