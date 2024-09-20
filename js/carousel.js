// Get the carousel elements
const carouselContainer = document.querySelector('.carousel-container');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set the active item
let activeItem = 0;

// Function to play the video on mouseover
function playVideo() {
  const video = this.querySelector('video');
  video.play();
}

// Function to pause the video on mouseout
function pauseVideo() {
  const video = this.querySelector('video');
  video.pause();
}

// Add event listeners to the carousel items
carouselItems.forEach((item, index) => {
  item.addEventListener('mouseover', playVideo);
  item.addEventListener('mouseout', pauseVideo);
});

// Add event listeners to the navigation buttons
prevBtn.addEventListener('click', () => {
  activeItem--;
  if (activeItem < 0) {
    activeItem = carouselItems.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  activeItem++;
  if (activeItem >= carouselItems.length) {
    activeItem = 0;
  }
  updateCarousel();
});

// Function to update the carousel
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
  });
  carouselItems[activeItem].classList.add('active');
}