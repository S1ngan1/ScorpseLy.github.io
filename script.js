let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      }

      for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
      }

      slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide--;
      showSlide(currentSlide);
    }

    // Automatic slideshow
setInterval(nextSlide, 5000); // Change slide every 5 seconds
    

var cONTACTINFORMATIONText = document.getElementById("cONTACTINFORMATIONText");
      if (cONTACTINFORMATIONText) {
        cONTACTINFORMATIONText.addEventListener("click", function (e) {
          // Please sync "REGISTER TICKET" to the project
        });
      }
      
      var rectangle1 = document.getElementById("rectangle1");
      if (rectangle1) {
        rectangle1.addEventListener("click", function (e) {
          // Please sync "CONTACT INFORMATION" to the project
        });
      }
      
      var bOOKFORA = document.getElementById("bOOKFORA");
      if (bOOKFORA) {
        bOOKFORA.addEventListener("click", function (e) {
          // Please sync "CONTACT INFORMATION" to the project
        });
}
      
const groupVisitCheckbox = document.getElementById('group-visit');
  const ticketsField = document.querySelector('.tickets-field');

  groupVisitCheckbox.addEventListener('change', () => {
      if (groupVisitCheckbox.checked) {
          ticketsField.style.display = 'block';
      } else {
          ticketsField.style.display = 'none';
      }
  });