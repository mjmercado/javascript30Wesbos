const slides = document.querySelectorAll(".lesson");
const progressBar = document.querySelector(".custom-pagination .pagination");

const onLoadVal = (1 / slides.length) * 100;

var slider = new Swiper(".lessons", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  speed: 500,
  on: {
    init: function() {
      progressBar.style.flexBasis = `${onLoadVal}%`;
    },
    slideChange: function() {
      const i = this.snapIndex;
      const t = slides.length;

      if (i > t) {
        let r = (1 / t) * 100;
      } else if (i === 0) {
        let r = (t / t) * 100;
      } else {
        let r = (i / t) * 100;
      }
      console.log(i);
      progressChange(r);
    },
    reachEnd: function() {
      console.log("End");
    },
    transitionEnd: function() {
      console.log("Transition end");
    }
  }
});

function progressChange(percent) {
  progressBar.style.flexBasis = `${percent}%`;
}
