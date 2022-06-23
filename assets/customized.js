//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

var viewport = (function() {
  var viewPorts = ['xs', 'sm', 'md', 'lg'];

  var viewPortSize = function() {
    return window.getComputedStyle(document.body, ':before').content.replace(/"/g, '');
  }

  var is = function(size) {
    if ( viewPorts.indexOf(size) == -1 ) throw "no valid viewport name given";
    return viewPortSize() == size;
  }

  var isEqualOrGreaterThan = function(size) {
    if ( viewPorts.indexOf(size) == -1 ) throw "no valid viewport name given";
    return viewPorts.indexOf(viewPortSize()) >= viewPorts.indexOf(size);
  }

  // Public API
  return {
    is: is,
    isEqualOrGreaterThan: isEqualOrGreaterThan
  }

})();

function scrollFunction() {
  if ($(window).width() >= 992) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}