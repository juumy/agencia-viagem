let menuToggle = document.getElementById("menu-toggle")

let overlay = document.getElementById("overlay")
let anterior = document.getElementById("anterior")
let proximo = document.getElementById("proximo")

let dot1 = document.getElementById("dot1")
let dot2= document.getElementById("dot2")
let dot3 = document.getElementById("dot3")

let card = document.getElementsByClassName("card-image") 
let botoes = document.getElementsByClassName("button")

for (const link of botoes) {
  link.addEventListener("click", contatar)
}

function contatar() {
  window.location.href="#contato"
}

setTimeout(() => {
   for (const imagens of card) {
   imagens.style.filter = 'none' 
   imagens.style.transition = 'filter 1s'
  } 
}, 600);




dot1.addEventListener("click", function(){currentSlide(1)})
dot2.addEventListener("click", function(){currentSlide(2)})
dot3.addEventListener("click", function(){currentSlide(3)})

proximo.addEventListener("click", function(){plusSlides(1)})
anterior.addEventListener("click", function(){plusSlides(-1)})

menuToggle.addEventListener("click", toggleMenu)
overlay.addEventListener("click", closeMenu)

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
}
window.addEventListener('load', function() {
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		content_image.src = image_url;
		
		content_image.addEventListener('load', function() {
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}

let slideIndex = 0;
function plusSlides(n) {
  manualSlide(slideIndex += n);
}

function currentSlide(n) {
  manualSlide(slideIndex = n);
}

function manualSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
autoSlide()

function autoSlide() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
} 

setInterval(() => {
    autoSlide()
}, 6000);

