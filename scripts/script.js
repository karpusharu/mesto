let popupBg = document.querySelector('.popup__bg');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');

openPopupButton.addEventListener('click', function(){
    popupBg.classList.add('popup__bg_active');
})

closePopupButton.addEventListener('click', function(){
    popupBg.classList.remove('popup__bg_active');
})

let formElement = document.querySelector('.popup');
    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_job');
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__job-description');
    function handleFormSubmit (evt) {
        evt.preventDefault();
        name.textContent = nameInput.value;
        job.textContent = jobInput.value;
    }
formElement.addEventListener('submit', handleFormSubmit);