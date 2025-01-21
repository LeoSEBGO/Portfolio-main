// icon de la navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// partie js  navbar

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    // reset: true ,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img ', {origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content ', {origin:'right'});

// partie Animation de text

const typed = new Typed('.anime-text', {
    strings: ['DEVELOPPEUR','WEB','& MOBILE' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let currentTheme = 'theme1';

themeToggle.addEventListener('click', () => {
  body.classList.remove(currentTheme);
  currentTheme = currentTheme === 'theme1' ? 'theme2' : 'theme1';
  body.classList.add(currentTheme);
});



emailjs.init("fEpzn6CBuQmyo11Vk");

function envoyerFormulaire(event) {
    event.preventDefault();

    const nom = document.getElementsByName('nom')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const numero = document.getElementsByName('numero')[0].value;
    const objet = document.getElementsByName('objet')[0].value;
    const message = document.getElementsByName('message')[0].value;


    if (!isValidEmail(email)) {
        alert("Veuillez vérifier votre adresse e-mail.");
        return;
    }
    const templateParams = {
        from_name: nom,
        to_email: "sebgoleonardo3@gmail.com",
        to_name: "Leonard SEBGO",
        subject: objet,
        message: message,
    };

    emailjs.send("service_SLeonard", "template_zku67sq", templateParams)
        .then(function(response) {
            alert("Message envoyé avec succès !");
        }, function(error) {
            alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
        });
}
function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const formulaire = document.getElementById('monFormulaire');
formulaire.addEventListener('submit', envoyerFormulaire);
