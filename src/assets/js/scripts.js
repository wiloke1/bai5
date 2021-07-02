function navigationMobile() {
  var toggleNavMobileEl = document.querySelector(".toggle-nav-mobile");
  var navMobileEl = document.querySelector(".navigation-mobile");
  var navMobileItemEls = document.querySelectorAll(".navigation-mobile__item");
  var toggleClassActive = "toggle-nav-mobile--active";
  var vavMobileClassActive = "navigation-mobile--active";

  navMobileItemEls.forEach(function (navMobileItemEl, index) {
    var transitionDelay = index / 20 + 0.3 + "s";
    navMobileItemEl.style.transitionDelay = transitionDelay;
  });

  toggleNavMobileEl.addEventListener("click", function () {
    toggleNavMobileEl.classList.toggle(toggleClassActive);
    navMobileEl.classList.toggle(vavMobileClassActive);
  });
}

navigationMobile();

function handleThemeColor() {
  var switchEl = document.querySelector(".switch");
  /** @type {HTMLInputElement} */
  var switchInputEl = switchEl.querySelector(".switch__input");
  switchInputEl.addEventListener("click", () => {
    if (switchInputEl.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
}

handleThemeColor();

function preloading() {
  var preloadingEl = document.querySelector(".preloading");
  var classLoaded = "preloading--loaded";
  window.addEventListener("load", function () {
    preloadingEl.classList.add(classLoaded);
  });
}

preloading();
