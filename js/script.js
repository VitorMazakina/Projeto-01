window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    if (window.pageYOffset > 50) {
      logo.classList.add('hide-logo');
    } else {
      logo.classList.remove('hide-logo');
    }
  });
  