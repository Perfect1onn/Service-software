/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");



var btnsCallModal = document.querySelectorAll(".call");
var btnsFeedbackModal = document.querySelectorAll(".chat");
var btnBurgerMenu = document.querySelector("#burger-menu-btn");
var burgerMenuClosleButton = document.querySelector(".burger-menu__close-btn");
var modalCallCloseButton = document.querySelector("#modal-close-button-call");
var modalFeedbackCloseButton = document.querySelector("#modal-close-button-feedback");
var feedbackModal = document.querySelector("#modal-feedback");
var callModal = document.querySelector("#modal-call");
var burgerMenu = document.querySelector(".burger-menu");
var brandItems = document.querySelectorAll(".service-section-repair__item-brand");
var technicItems = document.querySelectorAll(".service-section-repair__item-texnika");
console.log(brandItems, technicItems);
var openButton = document.querySelectorAll(".actionButton");
console.log(openButton);
document.addEventListener("click", function (e) {
  switch (e.target) {
    case btnsCallModal[0]:
    case btnsCallModal[1]:
      modalOpen(callModal);
      break;

    case btnsFeedbackModal[0]:
    case btnsFeedbackModal[1]:
      modalOpen(feedbackModal);
      break;

    case modalCallCloseButton:
      modalOpen(callModal);
      break;

    case modalFeedbackCloseButton:
      modalOpen(feedbackModal);
      break;

    case btnBurgerMenu:
      burgerMenu.classList.add("animateD");
      burgerMenu.style.display = "flex";
      break;

    case burgerMenuClosleButton:
      burgerMenu.style.display = "none";
      break;

    case openButton[0]:
      handleClickBrand(brandItems);
      break;

    case openButton[1]:
      handleClickTechnic(technicItems);
      break;
  }
});

function modalOpen(modal) {
  if (modal.classList.contains("unvisible")) {
    modal.classList.remove("unvisible");
  } else {
    modal.classList.add("unvisible");
  }
}

function hideItems(items) {
  if (items === brandItems) {
    if (items.length > 8 && window.innerWidth > 900) {
      items.forEach(function (el, i) {
        if (i >= 8) {
          el.style.display = "none";
        }
      });
    } else if (items.length > 8 && window.innerWidth < 900 && window.innerWidth >= 768) {
      items.forEach(function (el, i) {
        if (i >= 6) {
          el.style.display = "none";
        }
      });
    }
  } else {
    if (items.length > 4 && window.innerWidth > 900) {
      items.forEach(function (el, i) {
        if (i >= 4) {
          el.style.display = "none";
          el.classList.remove("animateItem");
        }
      });
    } else if (items.length > 4 && window.innerWidth < 900 && window.innerWidth >= 768) {
      items.forEach(function (el, i) {
        if (i >= 3) {
          el.style.display = "none";
        }
      });
    }
  }
}

function openItems(items) {
  if (items === brandItems) {
    if (items.length > 8) {
      items.forEach(function (el) {
        el.style.display = "flex";
        el.classList.add("animateItem");
      });
    }
  } else {
    if (items.length > 4) {
      items.forEach(function (el) {
        el.style.display = "flex";
        el.classList.add("animateItem");
      });
    }
  }
}

var expandFlagBrand = true;
var expandFlagTechnik = true;

function handleClickBrand(items) {
  if (expandFlagBrand) {
    openButton[0].innerText = "Скрыть";
    expandFlagBrand = false;
    return openItems(items);
  } else {
    openButton[0].innerText = "Показать все";
    expandFlagBrand = true;
    return hideItems(items);
  }
}

function handleClickTechnic(items) {
  if (expandFlagTechnik) {
    openButton[1].innerText = "Скрыть";
    expandFlagTechnik = false;
    return openItems(items);
  } else {
    openButton[1].innerText = "Показать все";
    expandFlagTechnik = true;
    return hideItems(items);
  }
}

function mediaCheckQuery() {
  brandItems.forEach(function (el) {
    el.style.display = "flex";
  });
  technicItems.forEach(function (el) {
    el.style.display = "flex";
  });

  if (brandItems.length > 8 && window.innerWidth > 1010) {
    brandItems.forEach(function (el, i) {
      if (i >= 8) {
        el.style.display = "none";
      }
    });
  }

  if (brandItems.length > 8 && window.innerWidth < 1010 && window.innerWidth >= 768) {
    brandItems.forEach(function (el, i) {
      if (i >= 6) {
        el.style.display = "none";
      }
    });
  }

  if (technicItems.length > 4 && window.innerWidth > 1010) {
    technicItems.forEach(function (el, i) {
      if (i >= 4) {
        el.style.display = "none";
      }
    });
  }

  if (technicItems.length > 4 && window.innerWidth < 1010 && window.innerWidth >= 768) {
    technicItems.forEach(function (el, i) {
      if (i >= 3) {
        el.style.display = "none";
      }
    });
  }
}

var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperTickets = new Swiper("#info-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10
});
hideItems(brandItems);
hideItems(technicItems);
window.addEventListener("resize", mediaCheckQuery);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/burger.svg */ "./img/icons/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/Group.svg */ "./img/icons/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/call.svg */ "./img/icons/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/chat.svg */ "./img/icons/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/profile.svg */ "./img/icons/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/repair.svg */ "./img/icons/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/checkstatus.svg */ "./img/icons/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/close.svg */ "./img/icons/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/search.svg */ "./img/icons/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/goside.svg */ "./img/icons/goside.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/expand.svg */ "./img/icons/expand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/images/_MG_3223.svg */ "./img/images/_MG_3223.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap.svg */ "./img/brands/Bitmap.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/go.svg */ "./img/icons/go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-1.svg */ "./img/brands/Bitmap-1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-2.svg */ "./img/brands/Bitmap-2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-3.svg */ "./img/brands/Bitmap-3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-4.svg */ "./img/brands/Bitmap-4.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-5.svg */ "./img/brands/Bitmap-5.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-6.svg */ "./img/brands/Bitmap-6.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/Bitmap-7.svg */ "./img/brands/Bitmap-7.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/more.svg */ "./img/icons/more.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css\"\n    />\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n    />\n    <script src=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js\"></script>\n    <title>new site</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__logo\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" id=\"burger-menu-btn\" class=\"btn-menu\"/>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\" class=\"btn-menu\"/>\n      </div>\n      <nav class=\"header__nav-menu\">\n        <div class=\"header__modals\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"call\" class=\"call\" class=\"btn-menu\"/>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"chat\" class=\"chat\" class=\"btn-menu\"/>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"profile\" />\n        </div>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"repair logo\" />\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"ticket logo\" class=\"btn-menu\"/>\n      </nav>\n    </header>\n    <aside class=\"burger-menu\">\n      <div class=\"burger-menu__container\">\n        <div>\n          <div class=\"burger-menu__header\">\n            <div class=\"burger-menu__main-nav\">\n              <img class=\"burger-menu__close-btn\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" />\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\" />\n            </div>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"search-button\" />\n          </div>\n          <nav class=\"burger-menu__body\">\n            <a class=\"burger-menu__link\" href=\"#\">Ремонт техники</a>\n            <a class=\"burger-menu__link burger-menu__active\" href=\"#\"\n              >Услуги и сервисы</a\n            >\n            <a class=\"burger-menu__link\" href=\"#\">Корпоративным клиентам</a>\n            <a class=\"burger-menu__link\" href=\"#\">Продавцам техники</a>\n            <a class=\"burger-menu__link\" href=\"#\">Партнерам</a>\n            <a class=\"burger-menu__link\" href=\"#\">Производителям</a>\n            <a class=\"burger-menu__link\" href=\"#\">Наши сервисные центры</a>\n            <a class=\"burger-menu__link\" href=\"#\">Контакты</a>\n          </nav>\n        </div>\n        <div class=\"burger-menu__footer\">\n          <div class=\"burger-menu__icons\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"call\" class=\"call\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"chat\" class=\"chat\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"profile\" />\n          </div>\n          <a class=\"burger-menu__mail\">mail@cps.com</a>\n          <a class=\"burger-menu__number\">8 800 890 8900</a>\n          <div class=\"burger-menu__languages\">\n            <button>RU</button>\n            <button>EN</button>\n            <button>CH</button>\n          </div>\n        </div>\n      </div>\n    </aside>\n    <div class=\"modal unvisible\" id=\"modal-call\">\n      <div class=\"modal__background\"></div>\n      <div class=\"modal__window\">\n        <img\n          class=\"modal__close-btn\"\n          src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n          id=\"modal-close-button-call\"\n        />\n        <div class=\"modal__title\">Заказать звонок</div>\n        <form action=\"#\" class=\"modal__form container-modal\">\n          <input placeholder=\"Телефон\" />\n          <span class=\"modal__text\"\n          >Нажимая “отправить”, вы даете согласие на\n          <span style=\"color: #ff3e79\">обработку персональных</span> данных и\n          соглашаетесь с нашей\n          <span style=\"color: #ff3e79\"\n            >политикой конфиденциальности</span\n          ></span\n        >\n          <div class=\"modal__button\">\n            <button class=\"service-section-price__button\">\n              Отправить <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"modal unvisible\" id=\"modal-feedback\">\n      <div class=\"modal__background\"></div>\n      <div class=\"modal__window\">\n        <img\n          class=\"modal__close-btn\"\n          src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n          id=\"modal-close-button-feedback\"\n        />\n        <div class=\"modal__title\">Обратная связь</div>\n        <form action=\"#\" class=\"modal__form container-modal\">\n          <input placeholder=\"Имя\" />\n          <input placeholder=\"Телефон\" />\n          <input placeholder=\"Электронная почта\" />\n          <textarea placeholder=\"Сообщение\"> </textarea>\n          <span class=\"modal__text\"\n            >Нажимая “отправить”, вы даете согласие на\n            <span style=\"color: #ff3e79\">обработку персональных</span> данных и\n            соглашаетесь с нашей\n            <span style=\"color: #ff3e79\"\n              >политикой конфиденциальности</span\n            ></span\n          >\n          <div class=\"modal__button\">\n            <button class=\"service-section-price__button\">\n              Отправить <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <main>\n      <section class=\"service-section-info\">\n        <div class=\"service-section-info__header container\">\n          <div class=\"service-section-info__heading\">\n            <span class=\"service-section-info__title\">Услуги и сервисы</span>\n            <div class=\"service-section-info__icons\">\n              <div class=\"service-section-info__ticket\">\n                <span>Оставить заявку</span>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"ticket logo\" />\n              </div>\n              <div class=\"service-section-info__repair\">\n                <span>Оставить заявку</span>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"repair logo\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"service-section-info__menu container\">\n          <div class=\"service-section-info__static-menu\">\n            <div class=\"service-section-info__menu-item current-item\">\n              Ремонтируемые бренды\n            </div>\n            <div class=\"service-section-info__menu-item\">\n              Дополнительные услуги\n            </div>\n            <div class=\"service-section-info__menu-item\">Цены на услуги</div>\n            <div class=\"service-section-info__menu-item\">\n              Адреса сервисных центров\n            </div>\n            <div class=\"service-section-info__menu-item\">Специальные цены</div>\n            <div class=\"service-section-info__menu-item\">Отзывы</div>\n          </div>\n          <div class=\"service-section-info__slider\">\n            <div class=\"swiper\" id=\"info-slider\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item current-item\">\n                    Ремонтируемые бренды\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item\">\n                    Дополнительные услуги\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item\">\n                    Цены на услуги\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item\">\n                    Адреса сервисных центров\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item\">\n                    Специальные цены\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"service-section-info__menu-item\">Отзывы</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <section class=\"service-section-content container\">\n        <div class=\"service-section-content__wrapper\">\n          <span class=\"service-section-content__info\">\n            Мы являемся авторизованным сервисным центром по ремонту техники\n            Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\n            официальной гарантией производителя. <br /><br />\n            Мы успешно работаем с 1992 года и заслужили репутацию надежного\n            <div class=\"unshow\">\n              партнера, что подтверждает большое количество постоянных клиентов.\n              Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою\n              очередь, советуют нас родным и близким.\n            </div>\n          </span>\n          <div class=\"service-section-content__button\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"expand\" />\n            <button>Читать далее</button>\n          </div>\n        </div>\n        <img\n          src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\n          class=\"service-section-content__photo\"\n        />\n      </section>\n      <section class=\"service-section-repair\">\n        <div class=\"service-section-repair__header container\">\n          РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ\n        </div>\n        <div class=\"service-section-repair__body\">\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n          <div class=\"service-section-repair__item-brand\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" />\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n          </div>\n        </div>\n        <div class=\"service-section-repair__slider\">\n          <div class=\"swiper\" id=\"brands-slider\">\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-brand\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" />\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n          </div>\n        </div>\n        <div class=\"service-section-repair__footer container\">\n          <div class=\"service-section-content__button\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"expand\" />\n            <button class=\"actionButton\">Показать все</button>\n          </div>\n        </div>\n      </section>\n      <section class=\"service-section-repair\">\n        <div class=\"service-section-repair__header container\">\n          РЕМОНТ ВИДОВ РАЗЛИЧНЫХ ТЕХНИКИ\n        </div>\n        <div class=\"service-section-repair__body\">\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">\n              Ремонт ноутбуков\n            </div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">\n              Ремонт планшетов\n            </div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">Ремонт ПК</div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">\n              Ремонт мониторов\n            </div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">\n              Ремонт ноутбуков\n            </div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n          <div class=\"service-section-repair__item-texnika\">\n            <div class=\"service-section-repair__item-text\">\n              Ремонт планшетов\n            </div>\n            <div class=\"service-section-repair__item-container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"service-section-repair__slider\">\n          <div class=\"swiper\" id=\"technik-slider\">\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">\n                    Ремонт ноутбуков\n                  </div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">\n                    Ремонт планшетов\n                  </div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">\n                    Ремонт мониторов\n                  </div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">\n                    Ремонт планшетов\n                  </div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">Ремонт ПК</div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-repair__item-texnika\">\n                  <div class=\"service-section-repair__item-text\">Ремонт ПК</div>\n                  <div class=\"service-section-repair__item-container\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n          </div>\n        </div>\n        <div class=\"service-section-repair__footer container\">\n          <div class=\"service-section-content__button\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"expand\" />\n            <button class=\"actionButton\">Показать все</button>\n          </div>\n        </div>\n      </section>\n      <section class=\"service-section-price\">\n        <div class=\"service-section-price__header container\">\n          ЦЕНЫ НА УСЛУГИ\n        </div>\n        <div class=\"service-section-price__body container\">\n          <div class=\"service-section-price__item\">\n            <span class=\"service-section-price__title\">Диагностика</span>\n            <span>Бесплатно</span>\n            <span>30 мин</span>\n            <button class=\"service-section-price__button\">\n              ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n          <div class=\"service-section-price__item\">\n            <span class=\"service-section-price__title\">Замена дисплея</span>\n            <span>1 000 ₽</span>\n            <span>30-120 мин</span>\n            <button class=\"service-section-price__button\">\n              ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n          <div class=\"service-section-price__item\">\n            <span class=\"service-section-price__title\"\n              >Замена полифонического динамика</span\n            >\n            <span>1 000 ₽</span>\n            <span>30-120 мин</span>\n            <button class=\"service-section-price__button\">\n              ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n          <div class=\"service-section-price__item\">\n            <span class=\"service-section-price__title\"\n              >Тестирование с выдачей технического заключения</span\n            >\n            <span>1 000 ₽</span>\n            <span>30-120 мин</span>\n            <button class=\"service-section-price__button\">\n              ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n          <div class=\"service-section-price__item\">\n            <span class=\"service-section-price__title\"\n              >Замена программного обеспечения</span\n            >\n            <span>1 000 ₽</span>\n            <span>30-120 мин</span>\n            <button class=\"service-section-price__button\">\n              ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n            </button>\n          </div>\n        </div>\n        <div class=\"service-section-repair__slider\">\n          <div class=\"swiper\" id=\"price-slider\">\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-price__item-slider\">\n                  <div class=\"service-section-price__item-description\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Ремонтные услуги\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Тестирование с выдачей технического заключения\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-price\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Цена\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Бесплатно\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-worktime\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Срок\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      30-120 мин\n                      <button class=\"service-section-price__button\">\n                        ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-price__item-slider\">\n                  <div class=\"service-section-price__item-description\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Ремонтные услуги\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Тестирование с выдачей технического заключения\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-price\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Цена\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Бесплатно\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-worktime\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Срок\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      30-120 мин\n                      <button class=\"service-section-price__button\">\n                        ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-price__item-slider\">\n                  <div class=\"service-section-price__item-description\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Ремонтные услуги\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Тестирование с выдачей технического заключения\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-price\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Цена\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Бесплатно\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-worktime\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Срок\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      30-120 мин\n                      <button class=\"service-section-price__button\">\n                        ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-slide\">\n                <div class=\"service-section-price__item-slider\">\n                  <div class=\"service-section-price__item-description\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Ремонтные услуги\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Тестирование с выдачей технического заключения\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-price\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Цена\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      Бесплатно\n                    </div>\n                  </div>\n                  <div class=\"service-section-price__item-worktime\">\n                    <div class=\"service-section-price__item-slider-title\">\n                      Срок\n                    </div>\n                    <div class=\"service-section-price__item-slider-text\">\n                      30-120 мин\n                      <button class=\"service-section-price__button\">\n                        ЗАКАЗАТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"swiper-pagination\"></div>\n          </div>\n        </div>\n        <div class=\"service-section-price__footer container\">\n          <span class=\"service-section-price__text\">\n            Все цены указаны с учетом НДС. Стоимость ремонта указана на\n            единичную услугу. Для получения коммерческого предложения на\n            постоянное обслуживание, оставьте заявку.\n          </span>\n          <span class=\"service-section-price__agreement\">\n            Получить коммерческое предложение\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" />\n          </span>\n        </div>\n      </section>\n      <footer class=\"footer\">\n        <span\n          >© 2019 CPS<br />\n          Разработано командой Apesong\n        </span>\n        <span>Политика конфиденциальности</span>\n        <span\n          >Информация, размещенная на данной странице, <br />не является\n          публичной офертой</span\n        >\n      </footer>\n    </main>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/brands/Bitmap-1.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-1.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-1.svg";

/***/ }),

/***/ "./img/brands/Bitmap-2.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-2.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-2.svg";

/***/ }),

/***/ "./img/brands/Bitmap-3.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-3.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-3.svg";

/***/ }),

/***/ "./img/brands/Bitmap-4.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-4.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-4.svg";

/***/ }),

/***/ "./img/brands/Bitmap-5.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-5.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-5.svg";

/***/ }),

/***/ "./img/brands/Bitmap-6.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-6.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-6.svg";

/***/ }),

/***/ "./img/brands/Bitmap-7.svg":
/*!*********************************!*\
  !*** ./img/brands/Bitmap-7.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap-7.svg";

/***/ }),

/***/ "./img/brands/Bitmap.svg":
/*!*******************************!*\
  !*** ./img/brands/Bitmap.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bitmap.svg";

/***/ }),

/***/ "./img/icons/Group.svg":
/*!*****************************!*\
  !*** ./img/icons/Group.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Group.svg";

/***/ }),

/***/ "./img/icons/burger.svg":
/*!******************************!*\
  !*** ./img/icons/burger.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/icons/call.svg":
/*!****************************!*\
  !*** ./img/icons/call.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/icons/chat.svg":
/*!****************************!*\
  !*** ./img/icons/chat.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/icons/checkstatus.svg":
/*!***********************************!*\
  !*** ./img/icons/checkstatus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/icons/close.svg":
/*!*****************************!*\
  !*** ./img/icons/close.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./img/icons/expand.svg":
/*!******************************!*\
  !*** ./img/icons/expand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/expand.svg";

/***/ }),

/***/ "./img/icons/go.svg":
/*!**************************!*\
  !*** ./img/icons/go.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/go.svg";

/***/ }),

/***/ "./img/icons/goside.svg":
/*!******************************!*\
  !*** ./img/icons/goside.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/goside.svg";

/***/ }),

/***/ "./img/icons/more.svg":
/*!****************************!*\
  !*** ./img/icons/more.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/more.svg";

/***/ }),

/***/ "./img/icons/profile.svg":
/*!*******************************!*\
  !*** ./img/icons/profile.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/icons/repair.svg":
/*!******************************!*\
  !*** ./img/icons/repair.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/icons/search.svg":
/*!******************************!*\
  !*** ./img/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/images/_MG_3223.svg":
/*!*********************************!*\
  !*** ./img/images/_MG_3223.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/_MG_3223.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map