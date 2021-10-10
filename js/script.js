(function() {
    'use strict';
  
    var goTopBtn = document.querySelector('.scroll-up');
    
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('scroll-up_visible');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('scroll-up_visible');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
      }
    }
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();