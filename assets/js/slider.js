var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n,id) {
  showSlides(slideIndex += n,id);
}

function showSlides(n,id) {
  var i;
  var slides = document.getElementsByClassName("mySlides"+id);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}