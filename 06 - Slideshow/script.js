// initialize the slide index
let slideIndex = 1;

/**
 * @param {number} initialIndex - slide index
 */
function showSlides(initialIndex) {

	// retrieve DOM elements
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

	// handle edge cases
  if (initialIndex > slides.length) {slideIndex = 1} 
  if (initialIndex < 1) {slideIndex = slides.length}

	// reset all slides and dots
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      dots[i].className = dots[i].className.replace(" active", "");			
  }

	// display the current slide and dot
	// slides array starts at index 0
  slides[slideIndex - 1].style.display = "block"; 
  dots[slideIndex - 1].className += " active";
}

// invoke when use clicks the prev or next button
function changeSlides(nextStep) {
  showSlides(slideIndex += nextStep);
}

// invoke when use clicks the dot indicator to jump to a slide
function currentSlide(jumpToSlide) {
  showSlides(slideIndex = jumpToSlide);
}

showSlides(slideIndex);

// automate the slides
setInterval(() => {
	slideIndex += 1;
	showSlides(slideIndex);
}, 2500);