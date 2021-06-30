function navigationMobile() {
  var toggleNavMobileEl = document.querySelector('.toggle-nav-mobile');
  var navMobileEl = document.querySelector('.navigation-mobile');
  var navMobileItemEls = document.querySelectorAll('.navigation-mobile__item');
  var toggleClassActive = 'toggle-nav-mobile--active';
  var vavMobileClassActive = 'navigation-mobile--active';

  navMobileItemEls.forEach(function(navMobileItemEl, index) {
    var transitionDelay = index / 20 + 0.3 + 's';
    navMobileItemEl.style.transitionDelay = transitionDelay;
  })

  toggleNavMobileEl.addEventListener('click', function() {
    toggleNavMobileEl.classList.toggle(toggleClassActive);
    navMobileEl.classList.toggle(vavMobileClassActive);
  })
}

navigationMobile();
