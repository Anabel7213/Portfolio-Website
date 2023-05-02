//getting the trigger button and the form
var buttons = document.querySelectorAll(".jshire");
var popup1 = document.querySelector(".pop-up");
var sendbutton = document.querySelector(".pop1btn");
var popup2 = document.querySelector(".success-popup");
var close2nd = document.querySelector(".success-popup-btn");

//adding event listener to the button
buttons.forEach(function(button) {
button.addEventListener("click", function(){
    popup1.classList.add("show");
});
});

//adding a click event listener to the document
document.addEventListener("click", function(event) {
    //hiding popup upon clicking outside it or the button
    if(event.target !== buttons[0] && event.target !== buttons[1] && !popup1.contains(event.target)) {
        popup1.classList.remove("show");
    }
});

sendbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popup1.classList.remove("show");
    popup2.style.display = "block";
});

close2nd.addEventListener("click", function() {
    popup2.style.display = "none";
});

// Home Animation
const section = document.querySelectorAll(".about-area");

window.addEventListener('scroll', () => {
  section.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

const sections = document.querySelectorAll(".services-area");

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

const sectionss = document.querySelectorAll(".skills-area");

window.addEventListener('scroll', () => {
  sectionss.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

const sectionsss = document.querySelectorAll(".featured-wk");

window.addEventListener('scroll', () => {
  sectionsss.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});


//On the contacts page
var contactSubmit = document.querySelector("#contactS");

contactSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    popup2.style.display = "block"
});