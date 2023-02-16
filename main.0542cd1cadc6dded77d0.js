(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var i=n((function e(t,n,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"generateCard",(function(){return i._element=i._template.querySelector(".photo-grid__item").cloneNode(!0),i._cardImg=i._element.querySelector(".photo-grid__picture"),i._cardTitle=i._element.querySelector(".photo-grid__item-capture"),i._btnLikeCard=i._element.querySelector(".photo-grid__like-button"),i._btnDeleteCard=i._element.querySelector(".photo-grid__delete-picture"),i._fillData(),i._setEventListeners(),i._element})),r(this,"_fillData",(function(){i._cardTitle.textContent=i._data.name,i._cardImg.src=i._data.link,i._cardImg.alt=i._data.name})),r(this,"_setEventListeners",(function(){i._btnLikeCard.addEventListener("click",i._like),i._btnDeleteCard.addEventListener("click",i._delete),i._cardImg.addEventListener("click",(function(){return i._handleClick(i._data.name,i._data.link)}))})),r(this,"_like",(function(){i._btnLikeCard.classList.toggle("photo-grid__like-button_active")})),r(this,"_delete",(function(){i._element.remove(),i._element=null})),this._data=t,this._template=document.querySelector(n).content,this._handleClick=o}));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var p=l((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),a(this,"_showInputError",(function(e){r._errorElement=r._formElement.querySelector(".".concat(e.id,"-error")),r._errorElement.classList.add(r._config.errorClass),r._errorElement.textContent=e.validationMessage,e.classList.add(r._config.inputErrorClass)})),a(this,"_hideInputError",(function(e){r._errorElement=r._formElement.querySelector(".".concat(e.id,"-error")),r._errorElement.classList.remove(r._config.errorClass),r._errorElement.textContent="",e.classList.remove(r._config.inputErrorClass)})),a(this,"toggleButtonState",(function(){r._inputList.some((function(e){e.validity.valid?(r._buttonElement.classList.remove(r._config.inactiveButtonClass),r._buttonElement.disabled=!1):(r._buttonElement.classList.add(r._config.inactiveButtonClass),r._buttonElement.disabled=!0)}))})),a(this,"deleteValidationErrors",(function(){r._inputList.forEach((function(e){r._hideInputError(e)}))})),a(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),a(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)})),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},y=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_edit-profile"),d=document.querySelector(".popup_type_add-picture");function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S(r.key),r)}}function h(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var w=h((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"addItem",(function(e){r._container.prepend(e)})),g(this,"renderItems",(function(){r._renderedItems.forEach((function(e){r._renderer(e)}))})),this._renderedItems=o,this._renderer=i,this._container=document.querySelector(n)}));function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}var O=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=P(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_active")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function T(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===k(t)?t:String(t)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(r){var o=q(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,e)});function i(e){var t,n,r,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),r=C(n=o.call(this,e)),c=function(e,r){I((t=C(n),q(i.prototype)),"open",t).call(t),n._popupImg.src=r,n._popupTitle.textContent=e,n._popupImg.alt=e},(u=T(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._popupImg=n._popup.querySelector(".popup__picture"),n._popupTitle=n._popup.querySelector(".popup__picture-caption"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(O);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var V=function(){function e(t){var n=t.nameProfileSelector,r=t.jobProfileSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(n),this._jobProfile=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,job:this._jobProfile.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameProfile.textContent=t,this._jobProfile.textContent=n}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N(r.key),r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function N(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}(this,e)});function u(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=H(n=i.call(this,e)),c=function(){var e={};return n._inputList.forEach((function(t){return e[t.name]=t.value})),e},(o=N(o="_getInputValues"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._formSubmitHandler=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;A(M(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitHandler(e._getInputValues())}))}},{key:"close",value:function(){A(M(u.prototype),"close",this).call(this),this._form.reset()}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(O),G=new p(s,b),J=new p(s,d),K=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){K.addItem($(e))}},".photo-grid"),Q=new V({nameProfileSelector:".profile__name",jobProfileSelector:".profile__job-description"}),W=new F(".popup_type_edit-profile",(function(e){Q.setUserInfo(e),W.close()})),X=new F(".popup_type_add-picture",(function(e){K.addItem($(e)),X.close()})),Y=new x(".popup_type_full-size-picture");function Z(e,t){Y.open(e,t)}function $(e){return new i(e,"#photo-item-template",Z).generateCard()}K.renderItems(),y.addEventListener("click",(function(){G.deleteValidationErrors(),W.setInputValues(Q.getUserInfo()),G.toggleButtonState(),W.open()})),m.addEventListener("click",(function(){J.deleteValidationErrors(),J.toggleButtonState(),X.open()})),W.setEventListeners(),Y.setEventListeners(),X.setEventListeners(),G.enableValidation(),J.enableValidation()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNTgwNzNmNjdlMzcwN2UxYjg3OS5qcyIsIm1hcHBpbmdzIjoiazdCQUFxQkEsRUFBSSxHQUN2QixXQUFZQyxFQUFNQyxFQUFVQyxHQUFhLFksNEZBQUEsZ0NBTTFCLFdBWWIsT0FYQSxFQUFLQyxTQUFXLEVBQUtDLFVBQ2xCQyxjQUFjLHFCQUNkQyxXQUFVLEdBQ2IsRUFBS0MsU0FBVyxFQUFLSixTQUFTRSxjQUFjLHdCQUM1QyxFQUFLRyxXQUFhLEVBQUtMLFNBQVNFLGNBQWMsNkJBQzlDLEVBQUtJLGFBQWUsRUFBS04sU0FBU0UsY0FBYyw0QkFDaEQsRUFBS0ssZUFBaUIsRUFBS1AsU0FBU0UsY0FDbEMsK0JBRUYsRUFBS00sWUFDTCxFQUFLQyxxQkFDRSxFQUFLVCxRQUNkLElBQUMsb0JBRVcsV0FDVixFQUFLSyxXQUFXSyxZQUFjLEVBQUtDLE1BQU1DLEtBQ3pDLEVBQUtSLFNBQVNTLElBQU0sRUFBS0YsTUFBTUcsS0FDL0IsRUFBS1YsU0FBU1csSUFBTSxFQUFLSixNQUFNQyxJQUNqQyxJQUFDLDZCQUVvQixXQUNuQixFQUFLTixhQUFhVSxpQkFBaUIsUUFBUyxFQUFLQyxPQUNqRCxFQUFLVixlQUFlUyxpQkFBaUIsUUFBUyxFQUFLRSxTQUNuRCxFQUFLZCxTQUFTWSxpQkFBaUIsU0FBUyxrQkFDdEMsRUFBS0csYUFBYSxFQUFLUixNQUFNQyxLQUFNLEVBQUtELE1BQU1HLEtBQUssR0FFdkQsSUFBQyxnQkFFTyxXQUNOLEVBQUtSLGFBQWFjLFVBQVVDLE9BQU8saUNBQ3JDLElBQUMsa0JBRVMsV0FDUixFQUFLckIsU0FBU3NCLFNBQ2QsRUFBS3RCLFNBQVcsSUFDbEIsSUF6Q0V1QixLQUFLWixNQUFRZCxFQUNiMEIsS0FBS3RCLFVBQVl1QixTQUFTdEIsY0FBY0osR0FBVTJCLFFBQ2xERixLQUFLSixhQUFlcEIsQ0FDdEIsSSwrNUJDTG1CMkIsRUFBYSxHQUNoQyxXQUFZQyxFQUFRQyxHQUFhLFksNEZBQUEsdUNBWVgsU0FBQ0MsR0FDckJBLEVBQWFDLFNBQVNDLE1BQ2xCLEVBQUtDLGdCQUFnQkgsR0FDckIsRUFBS0ksZ0JBQWdCSixFQUMzQixJQUFDLDBCQUdpQixTQUFDQSxHQUNqQixFQUFLSyxjQUFnQixFQUFLQyxhQUFhakMsY0FBYyxJQUFELE9BQzlDMkIsRUFBYU8sR0FBRSxXQUdyQixFQUFLRixjQUFjZCxVQUFVaUIsSUFBSSxFQUFLQyxRQUFRQyxZQUM5QyxFQUFLTCxjQUFjeEIsWUFBY21CLEVBQWFXLGtCQUM5Q1gsRUFBYVQsVUFBVWlCLElBQUksRUFBS0MsUUFBUUcsZ0JBQzFDLElBQUMsMEJBR2lCLFNBQUNaLEdBQ2pCLEVBQUtLLGNBQWdCLEVBQUtDLGFBQWFqQyxjQUFjLElBQUQsT0FDOUMyQixFQUFhTyxHQUFFLFdBR3JCLEVBQUtGLGNBQWNkLFVBQVVFLE9BQU8sRUFBS2dCLFFBQVFDLFlBQ2pELEVBQUtMLGNBQWN4QixZQUFjLEdBQ2pDbUIsRUFBYVQsVUFBVUUsT0FBTyxFQUFLZ0IsUUFBUUcsZ0JBQzdDLElBQUMsNEJBR21CLFdBQ2xCLEVBQUtDLFdBQVdDLE1BQUssU0FBQ2QsR0FDZkEsRUFBYUMsU0FBU0MsT0FJekIsRUFBS2EsZUFBZXhCLFVBQVVFLE9BQU8sRUFBS2dCLFFBQVFPLHFCQUNsRCxFQUFLRCxlQUFlRSxVQUFXLElBSi9CLEVBQUtGLGVBQWV4QixVQUFVaUIsSUFBSSxFQUFLQyxRQUFRTyxxQkFDL0MsRUFBS0QsZUFBZUUsVUFBVyxFQUtuQyxHQUNGLElBQUMsaUNBRXdCLFdBQ3ZCLEVBQUtKLFdBQVdLLFNBQVEsU0FBQ2xCLEdBQ3ZCLEVBQUtHLGdCQUFnQkgsRUFDdkIsR0FDRixJQUFDLDZCQUVvQixXQUNuQixFQUFLbUIsb0JBR0wsRUFBS04sV0FBV0ssU0FBUSxTQUFDbEIsR0FDdkJBLEVBQWFiLGlCQUFpQixTQUFTLFdBQ3JDLEVBQUtpQyxvQkFBb0JwQixHQUN6QixFQUFLbUIsbUJBQ1AsR0FDRixHQUNGLElBQUMsMkJBRWtCLFdBQ2pCLEVBQUt2QyxvQkFDUCxJQXhFRWMsS0FBS2UsUUFBVVgsRUFDZkosS0FBS1ksYUFBZVAsRUFDcEJMLEtBQUttQixXQUFhUSxNQUFNQyxLQUN0QjVCLEtBQUtZLGFBQWFpQixpQkFBaUI3QixLQUFLZSxRQUFRZSxnQkFFbEQ5QixLQUFLcUIsZUFBaUJyQixLQUFLWSxhQUFhakMsY0FDdENxQixLQUFLZSxRQUFRZ0IscUJBRWpCLElDVldDLEVBQW1CLENBQzlCQyxhQUFjLGVBQ2RILGNBQWUsZ0JBQ2ZDLHFCQUFzQixpQkFDdEJULG9CQUFxQix5QkFDckJKLGdCQUFpQiwwQkFDakJGLFdBQVksd0JBOEJEa0IsRUFBaUJqQyxTQUFTdEIsY0FBYyx5QkFDeEN3RCxFQUFnQmxDLFNBQVN0QixjQUFjLHdCQUd2Q3lELEVBQVduQyxTQUFTdEIsY0FBYyw0QkFDbEMwRCxFQUFpQnBDLFNBQVN0QixjQUFjLDJCLCs1QkN6Q2hDMkQsRUFBTyxHQUMxQixhQUFpQ0MsR0FBbUIsV0FBdENDLEVBQUssRUFBTEEsTUFBT0MsRUFBUSxFQUFSQSxVLDRGQUFRLDJCQU1uQixTQUFDQyxHQUNULEVBQUtDLFdBQVdDLFFBQVFGLEVBQzFCLElBQUMsc0JBRWEsV0FDWixFQUFLRyxlQUFlckIsU0FBUSxTQUFDc0IsR0FDM0IsRUFBS0MsVUFBVUQsRUFDakIsR0FDRixJQWJFOUMsS0FBSzZDLGVBQWlCTCxFQUN0QnhDLEtBQUsrQyxVQUFZTixFQUNqQnpDLEtBQUsyQyxXQUFhMUMsU0FBU3RCLGNBQWM0RCxFQUMzQyxJLHNyQkNMbUJTLEVBQUssV0FDeEIsV0FBWUMsR0FBZSxJLE1BQUEsUSw0RkFBQSxTLEVBQUEsSyxFQVdULFNBQUNDLEdBQ0QsV0FBWkEsRUFBSUMsS0FDTixFQUFLQyxPQUVULEcsTUFmMkIsc0Isd0ZBQ3pCcEQsS0FBS3FELE9BQVNwRCxTQUFTdEIsY0FBY3NFLEVBQ3ZDLEMsUUF1QkMsTyxFQXZCQSxHLEVBQUEsbUJBQ0QsV0FDRWpELEtBQUtxRCxPQUFPeEQsVUFBVWlCLElBQUksZ0JBQzFCYixTQUFTUixpQkFBaUIsVUFBV08sS0FBS3NELGdCQUM1QyxHQUFDLG1CQUNELFdBQ0V0RCxLQUFLcUQsT0FBT3hELFVBQVVFLE9BQU8sZ0JBQzdCRSxTQUFTc0Qsb0JBQW9CLFVBQVd2RCxLQUFLc0QsZ0JBQy9DLEdBQUMsK0JBTUQsV0FBb0IsV0FDbEJ0RCxLQUFLcUQsT0FBTzVELGlCQUFpQixhQUFhLFNBQUN5RCxHQUNyQ0EsRUFBSU0sT0FBTzNELFVBQVU0RCxTQUFTLGlCQUNoQyxFQUFLTCxRQUVIRixFQUFJTSxPQUFPM0QsVUFBVTRELFNBQVMsd0JBQ2hDLEVBQUtMLE9BRVQsR0FDRixNLG9FQUFDLEVBMUJ1QixHLGl0Q0NBSyxJQUVWTSxFQUFjLGEscVJBQUEsVSxNQUFBLEcsRUFBQSxFLDZqQkFDakMsV0FBWVQsR0FBZSxRLE1BRytDLE8sNEZBSC9DLFMsRUFDSixFQUFyQixjQUFNQSxJLEVBSUQsU0FBQzVELEVBQU1FLEdBQ1osNENBQ0EsRUFBS29FLFVBQVVyRSxJQUFNQyxFQUNyQixFQUFLcUUsWUFBWXpFLFlBQWNFLEVBQy9CLEVBQUtzRSxVQUFVbkUsSUFBTUgsQ0FDdkIsRyxNQVR1QixXLHdGQUNyQixFQUFLc0UsVUFBWSxFQUFLTixPQUFPMUUsY0FBYyxtQkFDM0MsRUFBS2lGLFlBQWMsRUFBS1AsT0FBTzFFLGNBQWMsMkJBQTJCLENBQzFFLENBQUMsTyxFQUFBLEUsb0RBQUEsQ0FMZ0MsQ0FBU3FFLEcsdXFCQ0Z2QmEsRUFBUSxXQUMzQixjQUF5RCxJQUEzQ0MsRUFBbUIsRUFBbkJBLG9CQUFxQkMsRUFBa0IsRUFBbEJBLG9CLDRGQUFrQixTQUNuRC9ELEtBQUtnRSxhQUFlL0QsU0FBU3RCLGNBQWNtRixHQUMzQzlELEtBQUtpRSxZQUFjaEUsU0FBU3RCLGNBQWNvRixFQUM1QyxDLFFBVUMsTyxFQVZBLEcsRUFBQSwwQkFDRCxXQUNFLE1BQU8sQ0FDTDFFLEtBQU1XLEtBQUtnRSxhQUFhN0UsWUFDeEIrRSxJQUFLbEUsS0FBS2lFLFlBQVk5RSxZQUUxQixHQUFDLHlCQUNELFlBQTJCLElBQWJFLEVBQUksRUFBSkEsS0FBTTZFLEVBQUcsRUFBSEEsSUFDbEJsRSxLQUFLZ0UsYUFBYTdFLFlBQWNFLEVBQ2hDVyxLQUFLaUUsWUFBWTlFLFlBQWMrRSxDQUNqQyxNLG9FQUFDLEVBZDBCLEcsMDNDQ0FFLElBRVZDLEVBQWEsYSxxUkFBQSxVLFFBQUEsRyxFQUFBLEUsNmpCQUNoQyxXQUFZbEIsRUFBZW1CLEdBQW1CLE0sTUFJb0IsTyw0RkFKcEIsUyxFQUN2QixFQUFyQixjQUFNbkIsSSxFQU1VLFdBQ2hCLElBQU1vQixFQUFhLENBQUMsRUFFcEIsT0FEQSxFQUFLbEQsV0FBV0ssU0FBUSxTQUFDOEMsR0FBSyxPQUFNRCxFQUFXQyxFQUFNakYsTUFBUWlGLEVBQU1DLEtBQUssSUFDakVGLENBQ1QsRyxNQVZ1QixzQix3RkFDckIsRUFBS0csbUJBQXFCSixFQUMxQixFQUFLSyxNQUFRLEVBQUtwQixPQUFPMUUsY0FBYyxnQkFDdkMsRUFBS3dDLFdBQWEsRUFBS2tDLE9BQU94QixpQkFBaUIsaUJBQWlCLENBQ2xFLENBdUJDLE8sRUF2QkEsRyxFQUFBLDZCQVFELFNBQWU2QyxHQUNiMUUsS0FBS21CLFdBQVdLLFNBQVEsU0FBQzhDLEdBQUssT0FBTUEsRUFBTUMsTUFBUUcsRUFBT0osRUFBTWpGLEtBQUssR0FDdEUsR0FBQywrQkFFRCxXQUFvQixXQUNsQixzREFDQVcsS0FBS3lFLE1BQU1oRixpQkFBaUIsVUFBVSxTQUFDeUQsR0FDckNBLEVBQUl5QixpQkFDSixFQUFLSCxtQkFBbUIsRUFBS0ksa0JBQy9CLEdBQ0YsR0FBQyxtQkFFRCxXQUNFLDBDQUNBNUUsS0FBS3lFLE1BQU1JLE9BQ2IsTSxvRUFBQyxFQTdCK0IsQ0FBUzdCLEdDZ0JyQzhCLEVBQXdCLElBQUkzRSxFQUFjNkIsRUFBa0JJLEdBQzVEMkMsRUFBcUIsSUFBSTVFLEVBQWM2QixFQUFrQkssR0FFekQyQyxFQUFVLElBQUkxQyxFQUNsQixDQUNFRSxNTmR3QixDQUMxQixDQUNFbkQsS0FBTSxRQUNORSxLQUFNLGlGQUVSLENBQ0VGLEtBQU0sc0JBQ05FLEtBQU0sNkZBRVIsQ0FDRUYsS0FBTSxVQUNORSxLQUFNLGtGQUVSLENBQ0VGLEtBQU0sV0FDTkUsS0FBTSxvRkFFUixDQUNFRixLQUFNLHFCQUNORSxLQUFNLDZGQUVSLENBQ0VGLEtBQU0sU0FDTkUsS0FBTSxrRk1STmtELFNBQVUsU0FBQ3dDLEdBQ1RELEVBQVFFLFFBQVFDLEVBQVdGLEdBQzdCLEdBRUYsZUFHSUcsRUFBVyxJQUFJdkIsRUFBUyxDQUM1QkMsb0JBQXFCLGlCQUNyQkMsbUJBQW9CLDhCQUdoQnNCLEVBQW1CLElBQUlsQixFQUMzQiw0QkFDQSxTQUFDTyxHQUNDVSxFQUFTRSxZQUFZWixHQUNyQlcsRUFBaUJqQyxPQUNuQixJQUdJbUMsRUFBa0IsSUFBSXBCLEVBQzFCLDJCQUNBLFNBQUNPLEdBQ0NNLEVBQVFFLFFBQVFDLEVBQVdULElBQzNCYSxFQUFnQm5DLE9BQ2xCLElBR0lvQyxFQUFpQixJQUFJOUIsRUFBZSxpQ0FLMUMsU0FBUytCLEVBQWdCcEcsRUFBTUUsR0FDN0JpRyxFQUFlRSxLQUFLckcsRUFBTUUsRUFDNUIsQ0FHQSxTQUFTNEYsRUFBV0YsR0FDbEIsT0FBTyxJQUFJNUcsRUFBSzRHLEVBQU0sdUJBQXdCUSxHQUFpQkUsY0FDakUsQ0FLQVgsRUFBUVksY0FHUjFELEVBQWV6QyxpQkFBaUIsU0FBUyxXQUN2Q3FGLEVBQXNCZSx5QkFDdEJSLEVBQWlCUyxlQUFlVixFQUFTVyxlQUN6Q2pCLEVBQXNCckQsb0JBQ3RCNEQsRUFBaUJLLE1BQ25CLElBR0F2RCxFQUFjMUMsaUJBQWlCLFNBQVMsV0FDdENzRixFQUFtQmMseUJBQ25CZCxFQUFtQnRELG9CQUNuQjhELEVBQWdCRyxNQUNsQixJQUdBTCxFQUFpQlcsb0JBQ2pCUixFQUFlUSxvQkFDZlQsRUFBZ0JTLG9CQUdoQmxCLEVBQXNCbUIsbUJBQ3RCbEIsRUFBbUJrQixrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9zY3JpcHQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZSIsImhhbmRsZUNsaWNrIiwiX2VsZW1lbnQiLCJfdGVtcGxhdGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmRJbWciLCJfY2FyZFRpdGxlIiwiX2J0bkxpa2VDYXJkIiwiX2J0bkRlbGV0ZUNhcmQiLCJfZmlsbERhdGEiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0ZXh0Q29udGVudCIsIl9kYXRhIiwibmFtZSIsInNyYyIsImxpbmsiLCJhbHQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpa2UiLCJfZGVsZXRlIiwiX2hhbmRsZUNsaWNrIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwidGhpcyIsImRvY3VtZW50IiwiY29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJfZXJyb3JFbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiaWQiLCJhZGQiLCJfY29uZmlnIiwiZXJyb3JDbGFzcyIsInZhbGlkYXRpb25NZXNzYWdlIiwiaW5wdXRFcnJvckNsYXNzIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfYnV0dG9uRWxlbWVudCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsImZvckVhY2giLCJ0b2dnbGVCdXR0b25TdGF0ZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwidmFsaWRhdGlvbkNvbmZpZyIsImZvcm1TZWxlY3RvciIsImJ0bkVkaXRQcm9maWxlIiwiYnRuQWRkUGljdHVyZSIsImZvcm1FZGl0IiwiZm9ybUFkZFBpY3R1cmUiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiZWxlbWVudCIsIl9jb250YWluZXIiLCJwcmVwZW5kIiwiX3JlbmRlcmVkSXRlbXMiLCJpdGVtIiwiX3JlbmRlcmVyIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltZyIsIl9wb3B1cFRpdGxlIiwiVXNlckluZm8iLCJuYW1lUHJvZmlsZVNlbGVjdG9yIiwiam9iUHJvZmlsZVNlbGVjdG9yIiwiX25hbWVQcm9maWxlIiwiX2pvYlByb2ZpbGUiLCJqb2IiLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJpbnB1dHNEYXRhIiwiaW5wdXQiLCJ2YWx1ZSIsIl9mb3JtU3VibWl0SGFuZGxlciIsIl9mb3JtIiwidmFsdWVzIiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsInByb2ZpbGVGb3JtVmFsaWRhdGlvbiIsImNhcmRGb3JtVmFsaWRhdGlvbiIsInNlY3Rpb24iLCJjYXJkIiwiYWRkSXRlbSIsImNyZWF0ZUNhcmQiLCJ1c2VySW5mbyIsInByb2ZpbGVFZGl0UG9wdXAiLCJzZXRVc2VySW5mbyIsInBpY3R1cmVBZGRQb3B1cCIsInBvcHVwV2l0aEltYWdlIiwiaGFuZGxlQ2FyZENsaWNrIiwib3BlbiIsImdlbmVyYXRlQ2FyZCIsInJlbmRlckl0ZW1zIiwiZGVsZXRlVmFsaWRhdGlvbkVycm9ycyIsInNldElucHV0VmFsdWVzIiwiZ2V0VXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9