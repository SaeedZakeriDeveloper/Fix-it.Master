const menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

let review = document.querySelector('#review'),
    //dots = Array.prototype.slice.call(document.getElementById('review-dots').children),
    //reviewContent = Array.prototype.slice.call(document.getElementById('review-content').children),
    dots = document.querySelectorAll('#review-dots li'),
    reviewContent = document.querySelectorAll('#review-content .review-box'),
    leftArrow = document.querySelector('#left-arrow'),
    rightArrow = document.querySelector('#right-arrow'),
    reviewSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    reviewTimer;

window.onload = function () {
    function playSlide(slide) {
        for (let i = 0; i < dots.length; i++) {
            reviewContent[i].classList.remove('active');
            reviewContent[i].classList.remove('inactive');
            dots[i].classList.remove('active');
        }
        if (slide < 0) {
            slide = currentSlide = reviewContent.length - 1;
        }
        if (slide > reviewContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            reviewContent[currentActive].classList.add("inactive");
        }
        reviewContent[slide].classList.add("active");
        dots[slide].classList.add("active");
        currentActive = currentSlide;

        clearTimeout(reviewTimer);
        reviewTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, reviewSpeed)
    }
    leftArrow.addEventListener("click", () => {
        playSlide(currentSlide -= 1);
    })
    rightArrow.addEventListener("click", () => {
        playSlide(currentSlide += 1);
    })
    for (let j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", () => {
            playSlide(currentSlide = dots.indexOf(this));
        })
    }
    playSlide(currentSlide);
}


const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
        if (current === 'about') {
            document.querySelector('.like .fa-thumbs-up').classList.add('active');
        } else {
            document.querySelector('.like .fa-thumbs-up').classList.remove('active');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*=' + current + ']').classList.add('active');
    });
});


// Function to open the modal (show the form)
// Function to open the modal (show the form)
function openModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
  }
  
  
  // Function to close the modal (hide the form)
  function closeModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "none";
  }
  
  // Attach event listener to the "Request" button to open the modal
  document.querySelector(".btn").addEventListener("click", openModal);
  
  // Function to show the form with a slide-down animation
function showFormWithSlideDown() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
  }
  
  // Function to show the form with a slide-down animation
function showFormWithSlideDown() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
  }
  
  // Function to close the modal (hide the form)
  function closeModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "none";
  }
  
  // Function to handle form submission
  document.getElementById("requestForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var activity = document.getElementById("activity").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
  
    // You can now process the form data, for example, send it to your email or server.
    // You can use AJAX or a form submission library to handle the form data.
  
    // After form submission, you can close the modal or show a success message to the user.
    closeModal(); // Example: Close the modal after form submission.
  });


  

//   const langSelect = document.getElementById('langSelect');
//   langSelect.addEventListener('change', () => {
//     const selectedLang = langSelect.value;
//     // Replace 'your_server_url' with the URL where your API is hosted (e.g., 'http://localhost:3000')
//     fetch('your_server_url/submit_form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ lang: selectedLang }),
//     })
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//   });

 
  




























//   const link = document.querySelector('.shakeLink');

//   function addShakeEffect() {
//       link.classList.add('shakeEffect');
//       setTimeout(() => {
//           link.classList.remove('shakeEffect');
//       }, 500); // Remove the class after 0.5 seconds (500 milliseconds)
//   }
  
//   function startShaking() {
//       setInterval(addShakeEffect, 2000); // Repeat every 2 seconds (2000 milliseconds)
//   }
  
<<<<<<< HEAD
//   // Start shaking when the page is loaded or when required.
//   startShaking();
=======
  // Start shaking when the page is loaded or when required.
  startShaking();

  function changeLanguage() {
    let element=document.getElementById("langBtn");
    let className=element.getAttribute("class");
    if(className == 'franceBtn'){
        document.getElementById("langBtn").classList.remove('franceBtn');
        document.getElementById("langBtn").classList.add('unitedBtn'); 
        window.location.href = "";
    }
    else if(className == 'unitedBtn'){
        document.getElementById("langBtn").classList.remove('unitedBtn');
        document.getElementById("langBtn").classList.add('franceBtn'); 
        window.location.href = "";
    }
  }
>>>>>>> 1455f2daed56c1b6432c74f7c1f1dc8739e42dea
  

 