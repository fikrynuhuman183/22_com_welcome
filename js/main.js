const menu = document.querySelector('.navigation');

document.querySelector('.hamburger').onclick = function () {
  menu.classList.add('show');
};

document.querySelector('.close').onclick = function () {
  menu.classList.remove('show');
};

addEventListener('scroll', function () {
  const header = document.querySelector('.nav-bar');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const video = document.querySelector('.video');
const button = document.querySelector('.video-control');
const videoWrapper = document.querySelector('.video-wrapper');

['.watch-button', '.actor-video'].forEach((el) => {
  document.querySelector(el).onclick = () => {
    videoWrapper.classList.add('active');
  };
});

document.querySelector('.close-video').onclick = () => {
  videoWrapper.classList.remove('active');
};

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "";
    video.play();
  } else {
    button.innerHTML = "";
    video.pause();
  }
}

button.addEventListener('click', playpausevideo);

var swiper = new Swiper('.review-slide', {
  direction: 'vertical',

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
});
