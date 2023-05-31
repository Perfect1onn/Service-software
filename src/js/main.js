import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";

const btnsCallModal = document.querySelectorAll(".call");
const btnsFeedbackModal = document.querySelectorAll(".chat");
const btnBurgerMenu = document.querySelector("#burger-menu-btn");
const burgerMenuClosleButton = document.querySelector(
  ".burger-menu__close-btn"
);
const modalCallCloseButton = document.querySelector("#modal-close-button-call");
const modalFeedbackCloseButton = document.querySelector(
  "#modal-close-button-feedback"
);

const feedbackModal = document.querySelector("#modal-feedback");
const callModal = document.querySelector("#modal-call");
const burgerMenu = document.querySelector(".burger-menu");

const brandItems = document.querySelectorAll(
  ".service-section-repair__item-brand"
);
const technicItems = document.querySelectorAll(
  ".service-section-repair__item-texnika"
);
console.log(brandItems, technicItems);

const openButton = document.querySelectorAll(".actionButton");

document.addEventListener("click", (e) => {
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
      items.forEach((el, i) => {
        if (i >= 8) {
          el.style.display = "none";
        }
      });
    } else if (
      items.length > 8 &&
      window.innerWidth < 900 &&
      window.innerWidth >= 768
    ) {
      items.forEach((el, i) => {
        if (i >= 6) {
          el.style.display = "none";
        }
      });
    }
  } else {
    if (items.length > 4 && window.innerWidth > 900) {
      items.forEach((el, i) => {
        if (i >= 4) {
          el.style.display = "none";
          el.classList.remove("animateItem")
        }
      });
    } else if (
      items.length > 4 &&
      window.innerWidth < 900 &&
      window.innerWidth >= 768
    ) {
      items.forEach((el, i) => {
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
      items.forEach((el) => {
        el.style.display = "flex";
        el.classList.add("animateItem")
      });
    }
  } else {
    if (items.length > 4) {
      items.forEach((el) => {
        el.style.display = "flex";
        el.classList.add("animateItem")
      });
    }
  }
}

let expandFlagBrand = true;
let expandFlagTechnik = true;

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
  brandItems.forEach((el) => {
    el.style.display = "flex";
  });
  technicItems.forEach((el) => {
    el.style.display = "flex";
  });

  if (brandItems.length > 8 && window.innerWidth > 1010) {
    brandItems.forEach((el, i) => {
      if (i >= 8) {
        el.style.display = "none";
      }
    });
  }

  if (
    brandItems.length > 8 &&
    window.innerWidth < 1010 &&
    window.innerWidth >= 768
  ) {
    brandItems.forEach((el, i) => {
      if (i >= 6) {
        el.style.display = "none";
      }
    });
  }

  if (technicItems.length > 4 && window.innerWidth > 1010) {
    technicItems.forEach((el, i) => {
      if (i >= 4) {
        el.style.display = "none";
      }
    });
  }

  if (
    technicItems.length > 4 &&
    window.innerWidth < 1010 &&
    window.innerWidth >= 768
  ) {
    technicItems.forEach((el, i) => {
      if (i >= 3) {
        el.style.display = "none";
      }
    });
  }
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: 0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperTickets = new Swiper("#info-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
});

hideItems(brandItems);
hideItems(technicItems);
window.addEventListener("resize", mediaCheckQuery);