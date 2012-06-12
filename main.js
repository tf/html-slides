var $ = require('ender');

function SlideSet() {
  var slides = $('section');

  function current() {
    var index = parseInt(location.hash.replace('#', ''));
    return isNaN(index) ? 0 : index;
  }

  function moveTo(i) {
    if (i >= 0 && i < slides.length) {
      location.hash = i;
    }
  }

  function update() {
    slides.removeClass('current');
    $(slides[current()]).addClass('current');
  };

  this.attach = function() {
    window.addEventListener('hashchange', update);
  }

  this.left = function () {
    moveTo(current() - 1);
  };

  this.right = function () {
    moveTo(current() + 1);
  };

  update();
}

$(document).ready(function () {
  var slides = new SlideSet();

  slides.attach();

  $(document).keydown(function (e) {
    if (e.keyCode === 37) {
      slides.left();
    }
    else if (e.keyCode === 39) {
      slides.right();
    }
  });
});
