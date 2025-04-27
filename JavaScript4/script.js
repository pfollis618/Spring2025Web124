// Patrick Follis 4/25/2025
// Adapted from https://javascript30.com/
// Slide in on Scroll

/*New Elements: wait, clearTimeout, setTimeout, .apply, .foreach, immediate*/
// couldn't figure out a big way to alter it without breaking it 
function debounce(func, wait = 25, immediate = true) { //changed wait to 25
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
        console.log("active")
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));

//   Attempted to set up a button that could flip the image, however all it did was break the code
// const buttonF = document.querySelector(".flip-image");

// buttonF.addEventListener("click", flipImage);

// function flipImage(){
//     // sliderImages.classList.remove('active');
//     // document.activeElement = null;
//     // var $e = $(e);
//     // var $original = $e.clone();
//     // $e.replaceWith($original);
//     // const flipNow =document.querySelectorAll(".flip-now");
//     // flipNow.classList.add("active");
//         console.log(`flip pressed`);
//     }

