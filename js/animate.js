const slides = document.querySelectorAll(".lesson");
const progressBar = document.querySelector(".custom-pagination .pagination");

const onLoadVal = (1 / slides.length) * 100;

var slider = new Swiper(".lessons", {
  effect: "cube",
  grabCursor: true,
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
      const i = this.snapIndex + 1;
      const t = slides.length;
      const r = (i / t) * 100;
      progressChange(r);
    }
  }
});

function progressChange(percent) {
  progressBar.style.flexBasis = `${percent}%`;
}
