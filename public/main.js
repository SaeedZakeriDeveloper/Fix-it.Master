const menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');
// import tinify from 'tinify';

// tinify.key = 'BZVYFJNckW57SzhWjKPXn6RswGYPzCWf';    //put the tinify key

// const source = tinify.fromFile('Furniture Assembly.jpg');
// source.toFile('./img/compressed_Furniture Assembly.jpg');




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



function openModal() {
    var list = ['activity', 'firstName', 'lastName', 'email', 'description', 'phoneNumber', 'address'];
    var invalidEmailBox = document.getElementById('invalidEmailBox');

    list.forEach(x => {
        var element = document.getElementById(x);
        element.value = '';
        element.className = '';
        element.placeholder = '';
        invalidEmailBox.style.visibility = 'hidden';
    })
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "none";
}

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






function showSuccessMessage() {
    var successModal = document.getElementById("successMessage");
    successModal.style.display = "block";
}

// Function to close the success message
function closeSuccessMessage() {
    var successModal = document.getElementById("successMessage");
    successModal.style.display = "none";
}

// Function to show the error message
function showErrorMessage() {
    var errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "block";
}

// Function to close the error message
function closeErrorMessage() {
    var errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "none";
}



// Function to handle form submission
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();
    // Get form values
    var activity = document.getElementById("activity").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address = document.getElementById("address").value;
    var list = ['firstName', 'lastName', 'email', 'description', 'phoneNumber', 'address'];

    var result = 0;

    list.forEach(x => {
        result += checkValidation(x);
    })
    if (result == list.length) {
        let loader = document.getElementById('loader');
        loader.style.visibility = 'visible';

        fetch("/submit_form", {
            method: "POST",
            body: JSON.stringify({
                activity,
                firstName,
                lastName,
                email,
                description,
                phoneNumber,
                address
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                loader.style.visibility = 'hidden';
                showSuccessMessage();
            })
            .catch(error => {
                loader.style.visibility = 'hidden';
                showErrorMessage();
            });

        // After form submission, you can close the modal or show a success message to the user.
        closeModal(); // Example: Close the modal after form submission.
    }

});

function checkValidation(id) {
    var element = document.getElementById(id);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (id == 'email') {
        var invalidEmailBox = document.getElementById('invalidEmailBox');
        if (element.value != '' && !element.value.match(validRegex)) {
            element.className = 'invalid';
            invalidEmailBox.style.visibility = 'visible';
            return 0;
        }
        else if (element.value != '' && element.value.match(validRegex)) {
            element.className = 'valid';
            invalidEmailBox.style.visibility = 'hidden';
            return 1;
        }
        else if (element.value == '') {
            invalidEmailBox.style.visibility = 'hidden';
            element.className = 'invalid';
            element.placeholder = 'required';
            return 0;
        }
    }
    else if (element.value == '') {
        element.className = 'invalid';
        element.placeholder = 'required';
        return 0;
    }
    else {
        element.className = 'valid';
        element.placeholder = '';
        return 1;
    }
}

function changeLanguage() {
    let element = document.getElementById("langBtn");
    let className = element.getAttribute("class");
    if (className == 'franceBtn') {
        element.classList.remove('franceBtn');
        element.classList.add('unitedBtn');
        window.location.href = "index.html";
    }
    else if (className == 'unitedBtn') {
        element.classList.remove('unitedBtn');
        element.classList.add('franceBtn');
        window.location.href = "index_en.html";
    }
}

//   const link = document.querySelector('.shakeLink');

//   function addShakeEffect() {
//       link.classList.add('shakeEffect');
//       setTimeout(() => {
//           link.classList.remove('shakeEffect');
//       }, 500); // Remove the class after 0.5 seconds (500 milliseconds)
//   }

//   function startShaking() {
//       setInterval(addShakeEffect, 20000); // Repeat every 2 seconds (2000 milliseconds)
//   }


const button = document.querySelector('.shakeEffect');

setInterval(() => {
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
        button.classList.add('fast');
        setTimeout(() => {
            button.classList.remove('fast');
        }, 500); // Keep the faster animation for 0.5 seconds
    }, 0.1); // Keep the standard animation for 0.5 seconds
}, 3000); // Repeat every 3 seconds