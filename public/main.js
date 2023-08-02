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
  

  let currentLanguage = "fr";

// Translations for different languages
const languageData  = {
    "fr": {
        "home": "Accueil",
        "services": "Services",
        "about": "À Propos",
        "reviews": "Avis",
        "pricing": "Tarification",
        "news": "Actualités",
        "contact": "Contactez",
        "save_time": "Gagnez du temps pour votre famille.",
        "complete_service": "Votre fournisseur de services complet",
        "mission": "Notre mission est de faciliter votre vie en fournissant des services fiables, efficaces et complets. Que vous ayez besoin d'aide pour l'assemblage, les réparations, les rénovations ou le nettoyage, nous avons l'expertise pour bien faire le travail !",
        "request_btn": "Demander",
        "why_choose_us": "Pourquoi Nous Choisir",
        "premium_service": "Service Premium",
        "premium_service_desc": "Résultats exceptionnels, savoir-faire de première qualité et souci du détail.",
        "cost_effective": "Économique",
        "cost_effective_desc": "Tarification compétitive sans compromis sur la qualité.",
        "eco_friendly": "Écologique",
        "eco_friendly_desc": "Pratiques respectueuses de l'environnement et solutions écologiques.",
        "equipment": "Équipement",
        "equipment_desc": "Outils de pointe pour un service efficace et de haute qualité.",
        "customer_say": "Ce Que Disent Nos Clients",
        "customer_review_1": "Waouh ! L'équipe de cette entreprise a terminé le projet de rénovation en avance sur le planning et a porté une attention particulière à chaque détail. Ils ont transformé mon espace en un endroit magnifique et fonctionnel qui m'a vraiment impressionné.",
        "customer_review_2": "Je ne pourrais pas être plus heureux du service exceptionnel fourni par cette entreprise lors de mon déménagement. L'équipe était professionnelle, prudente avec mes affaires et efficace tout au long du processus. Ils ont rendu mon déménagement sans stress et sans problème.",
        "customer_review_3": "Le service de nettoyage en profondeur de cette entreprise a fait des merveilles pour mes tapis et mes canapés. Ils ont vraiment fait tout leur possible pour que chaque centimètre soit impeccable. Je suis émerveillé de voir à quel point ma maison a l'air fraîche et renouvelée après leur nettoyage expert.",
        "customer_review_4": "Je recommande vivement cette entreprise pour leur travail de menuiserie de première qualité. Ils ont fabriqué avec savoir-faire des meubles sur mesure pour ma maison, et la qualité est exceptionnelle. Leur souci du détail et leur savoir-faire les démarquent vraiment.",
        "customer_review_5": "Je suis impressionné par leurs pratiques respectueuses de l'environnement ! Non seulement ils ont fourni un excellent service, mais ils ont également utilisé des matériaux durables et des solutions de nettoyage écologiques. Cela fait du bien de soutenir une entreprise qui se soucie de l'environnement.",
        "pricing_plan": "Choisissez Votre Plan Tarifaire",
        "pricing_desc": "Nous mettons en avant la flexibilité et la variété des plans tarifaires disponibles pour répondre aux différents besoins des utilisateurs. Nous mettons également l'accent sur les avantages et le soutien offerts, encourageant ainsi les visiteurs à trouver le plan qui correspond à leurs besoins spécifiques. N'hésitez pas à personnaliser la description pour correspondre aux offres uniques et aux caractéristiques de votre site Web.",
        "furniture_assembly": "Assemblage de Meubles",
        "furniture_assembly_desc": "Assemblage professionnel de meubles pour une expérience sans tracas - laissez nos experts s'occuper des détails pendant que vous vous détendez.",
        "painting": "Peinture",
        "painting_desc": "Rehaussez votre maison avec des résultats de peinture impeccables - notre équipe qualifiée utilise des matériaux de première qualité pour une longue durabilité des couleurs.",
        "efficient_moving": "Déménagement Efficace",
        "efficient_moving_desc": "Déménagement sans stress - faites confiance à notre équipe efficace pour une transition en douceur vers votre nouvelle maison.",
        "plumbing": "Plomberie",
        "plumbing_desc": "Maintenez votre maison en bon état avec nos solutions de plomberie fiables - des réparations aux installations, nous avons tout prévu.",
        "carpentry": "Menuiserie",
        "carpentry_desc": "Menuiserie personnalisée pour améliorer votre espace - découvrez un savoir-faire exceptionnel avec nos créations sur mesure.",
        "electric_service": "Service Électrique",
        "electric_service_desc": "Illuminez votre maison en toute sécurité avec notre service électrique expert - des électriciens certifiés assurent des installations et des réparations de première qualité.",
        "smart_home": "Solutions pour Maison Connectée Moderne !",
        "smart_home_desc": "Découvrez la technologie de pointe qui améliore le confort, la commodité et la sécurité de votre maison. Nos solutions pour maison connectée offrent une intégration transparente de l'éclairage intelligent, des thermostats et de la surveillance automatisée. Adoptez l'avenir de la vie moderne dès aujourd'hui !",
        "trendsetting_design": "Services de Design d'Intérieur Tendance",
        "trendsetting_design_desc": "Rénovez votre maison avec un design d'intérieur tendance. Notre talentueuse équipe crée des espaces captivants et fonctionnels adaptés à votre style. Rehaussez l'esthétique de votre maison avec notre expertise inégalée.",
        "same_day_repair": "Services de Réparation le Même Jour pour Votre Maison",
        "same_day_repair_desc": "Les solutions de maintenance rapides et efficaces sont notre priorité. Nos techniciens qualifiés s'occupent des réparations de plomberie, d'électricité, de menuiserie et d'appareils électroménagers le même jour. Profitez d'une maison sans tracas et parfaitement fonctionnelle.",
        "subscribe_newsletter": "Abonnez-vous à Notre Bulletin d'Information",
        "newsletter_placeholder": "votre@email.com",
        "send_btn": "Envoyer",
        "follow_us": "Suivez-nous",
        "request_form": "Formulaire de Demande",
        "activity": "Sélectionnez une Activité :",
        "first_name": "Prénom :",
        "last_name": "Nom :",
        "email": "Email :",
        "message": "Votre Message ..."
    },



    "en": {
        "home": "Home",
        "services": "Services",
        "about": "About",
        "reviews": "Reviews",
        "pricing": "Pricing",
        "news": "News",
        "contact": "Contact",
        "save_time": "Save time for your family.",
        "complete_service": "Your Complete Service Provider",
        "mission": "Our mission is to make your life easier by providing reliable, efficient, and comprehensive services. Whether you need assistance with assembly, repairs, renovations, or cleaning, we have the expertise to get the job done right!",
        "request_btn": "Request",
        "why_choose_us": "Why Choose Us",
        "premium_service": "Premium Service",
        "premium_service_desc": "Exceptional results, top-notch craftsmanship, and attention to detail.",
        "cost_effective": "Cost-Effective",
        "cost_effective_desc": "Competitive pricing without compromising on quality.",
        "eco_friendly": "Eco-Friendly",
        "eco_friendly_desc": "Environmentally conscious practices and green solutions.",
        "equipment": "Equipment",
        "equipment_desc": "State-of-the-art tools for efficient and high-quality service.",
        "customer_say": "What Customers Say",
        "customer_review_1": "Wow! The team at this company completed the renovation project ahead of schedule and paid close attention to every detail. They transformed my space into a beautiful and functional area that has left me truly impressed.",
        "customer_review_2": "I couldn't be happier with the exceptional service provided by this company during my move. The team was professional, careful with my belongings, and efficient throughout the entire process. They made my relocation stress-free and seamless.",
        "customer_review_3": "This company's deep cleaning service worked wonders for my carpets and sofas. They truly went the extra mile to ensure every inch was spotless. I am amazed at how fresh and renewed my home looks and feels after their expert cleaning.",
        "customer_review_4": "I highly recommend this company for their top-notch carpentry work. They skillfully crafted custom furniture pieces for my home, and the quality is exceptional. Their attention to detail and craftsmanship truly set them apart.",
        "customer_review_5": "I'm impressed with their eco-friendly practices! Not only did they provide excellent service, but they also used sustainable materials and green cleaning solutions. It feels good to support a company that cares about the environment.",
        "pricing_plan": "Choose Your Pricing Plan",
        "pricing_desc": "We highlight the flexibility and variety of pricing plans available to meet different user needs. We also emphasize the benefits and support offered, encouraging visitors to find the plan that aligns with their specific requirements. Feel free to customize the description further to match the unique offerings and characteristics of your website.",
        "furniture_assembly": "Furniture Assembly",
        "furniture_assembly_desc": "Professional furniture assembly for a hassle-free experience - let our experts handle the details while you relax.",
        "painting": "Painting",
        "painting_desc": "Elevate your home with flawless painting results - our skilled team uses premium materials for long-lasting vibrancy.",
        "efficient_moving": "Efficient Moving",
        "efficient_moving_desc": "Stress-free moving made simple - trust our efficient team for a smooth transition to your new home.",
        "plumbing": "Plumbing",
        "plumbing_desc": "Keep your home running smoothly with our reliable plumbing solutions - from repairs to installations, we've got you covered.",
        "carpentry": "Carpentry",
        "carpentry_desc": "Customized carpentry to enhance your space - experience craftsmanship at its finest with our tailored creations.",
        "electric_service": "Electric Service House",
        "electric_service_desc": "Illuminate your home safely with our expert electric service - certified electricians ensure top-notch installations and repairs.",
        "smart_home": "Smart Home Solutions for Modern Living!",
        "smart_home_desc": "Experience cutting-edge technology that enhances comfort, convenience, and security in your home. Our Smart Home Solutions offer seamless integration of smart lighting, thermostats, and automated surveillance. Embrace the future of modern living today!",
        "trendsetting_design": "Trendsetting Interior Design Services",
        "trendsetting_design_desc": "Revamp your home with trendsetting interior design. Our talented team creates captivating and functional spaces tailored to your style. Elevate your home's aesthetics with our unparalleled expertise.",
        "same_day_repair": "Same-Day Repair Services for Your Home",
        "same_day_repair_desc": "Quick and efficient maintenance solutions are our priority. Our skilled technicians handle plumbing, electrical, carpentry, and appliance repairs on the same day. Enjoy a hassle-free, fully functional home.",
        "subscribe_newsletter": "Subscribe to Our Newsletter",
        "newsletter_placeholder": "your@email.com",
        "send_btn": "Send",
        "follow_us": "Follow Us",
        "request_form": "Request Form",
        "activity": "Select an Activity:",
        "first_name": "First Name:",
        "last_name": "Last Name:",
        "email": "Email:",
        "message": "Message Here ..."
    },
}
function switchLanguage(language) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      const key = element.dataset.lang;
      element.innerText = languageData[language][key];
    });
  }
  
  // Function to change language when user selects an option
  function changeLanguage() {
    const langSelect = document.getElementById("langSelect");
    currentLanguage = langSelect.value;
    switchLanguage(currentLanguage);
  }
  
  // On page load, set language and add event listener for language selection
  window.onload = function () {
    // Set language on page load
    switchLanguage(currentLanguage);
  
    // Add event listener for language selection dropdown
    const langSelect = document.getElementById("langSelect");
    langSelect.addEventListener("change", changeLanguage);
  };


  const link = document.querySelector('.shakeLink');

  function addShakeEffect() {
      link.classList.add('shakeEffect');
      setTimeout(() => {
          link.classList.remove('shakeEffect');
      }, 500); // Remove the class after 0.5 seconds (500 milliseconds)
  }
  
  function startShaking() {
      setInterval(addShakeEffect, 2000); // Repeat every 2 seconds (2000 milliseconds)
  }
  
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
  

  ///////////