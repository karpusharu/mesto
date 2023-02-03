// *** IMPORTS ***
import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  btnAddPicture,
  btnEditProfile,
  formAddPicture,
  formEdit,
  initialCards,
  validationConfig,
} from "../scripts/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

// *** CLASS INSTANCES ***
const profileFormValidation = new FormValidator(validationConfig, formEdit);
const cardFormValidation = new FormValidator(validationConfig, formAddPicture);

const section = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      section.addItem(createCard(card));
    },
  },
  ".photo-grid"
);

const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  jobProfileSelector: ".profile__job-description",
});

const profileEditPopup = new PopupWithForm(
  ".popup_type_edit-profile",
  (values) => {
    userInfo.setUserInfo(values);
    profileEditPopup.close();
  }
);

const pictureAddPopup = new PopupWithForm(
  ".popup_type_add-picture",
  (values) => {
    section.addItem(createCard(values));
    pictureAddPopup.close();
  }
);

const popupWithImage = new PopupWithImage(".popup_type_full-size-picture");

// *** FUNCTIONS ***

// ** open full size picture popup when clicking on card
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// ** create photo card element
function createCard(card) {
  return new Card(card, "#photo-item-template", handleCardClick).generateCard();
}

// *** EVENT HANDLERS ***

// ** Insert default cards.
section.renderItems();

// ** Open edit profile pop-up
btnEditProfile.addEventListener("click", () => {
  profileFormValidation.deleteValidationErrors();
  profileEditPopup.setInputValues(userInfo.getUserInfo());
  profileFormValidation.disableSubmitButton();
  profileEditPopup.open();
});

// ** Open add picture pop-up
btnAddPicture.addEventListener("click", () => {
  cardFormValidation.deleteValidationErrors();
  pictureAddPopup.open();
});

// ** Set submit and close event listeners
profileEditPopup.setEventListeners();
popupWithImage.setEventListeners();
pictureAddPopup.setEventListeners();

// ** Enable forms validation
profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
