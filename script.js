const translations = {
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'A propos',
        'nav.services': 'Services',
        'nav.projects': 'Projets réalisés',
        'nav.contact': 'Contact',
        'home.greeting': 'Je me nomme',
        'home.role_prefix': 'je suis un',
        'home.description': 'Je suis à votre disposition pour créer des sites Web, avec des interfaces utilisateurs attractives et conviviales pour votre entreprise',
        'home.download_cv': 'Télécharger mon CV',
        'meta.title': 'Leonard SEBGO | Portfolio',
        'links.cv.href': 'cv/CVLEO.pdf',
        'links.cv.download': 'CVLEO.pdf',
        'links.portfolio': '#Projets',
        'social.linkedin': 'Profil LinkedIn de Leonard SEBGO',
        'social.facebook': 'Page Facebook de Leonard SEBGO',
        'about.heading': 'A <span>propos</span>',
        'about.subtitle': 'Developeur web & Mobile!',
        'about.text': "J'interviens dans le développement et la maintenance de sites web et d'applications mobiles. Et je serais ravi de mettre mes compétences en programmation et connaissances dans des langages de développement web tels que HTML, CSS, JavaScript, ainsi que des frameworks populaires Angular ... au service de votre Entreprise.",
        'common.see_more': 'Voir plus',
        'services.heading': 'Nos <span>Services</span>',
        'services.web.title': 'Developpement Web',
        'services.web.desc': 'Conception et développement de sites web attrayants en utilisant les dernières normes en matière de design. Collaboration étroite avec les clients pour comprendre leurs besoins et créer des concepts visuels convaincants.',
        'services.design.title': 'Design Graphique',
        'services.design.desc': 'Création de designs innovants pour divers supports tels que les supports imprimés, les médias numériques, les réseaux sociaux, etc. Collaboration étroite avec les clients pour comprendre leurs besoins et traduire leurs idées en visuels créatifs.',
        'services.marketing.title': 'Marketing Digital',
        'services.marketing.desc': "Développement et exécution de campagnes de marketing digital pour accroître la notoriété de la marque, l'engagement et les conversions. Nous nous concentrons sur la création de contenu pertinent et de valeur pour attirer et fidéliser l'audience.",
        'portfolio.heading': 'Projets <span>réalisés</span>',
        'portfolio.project1': 'Projet Hackathon Forum Dclic',
        'portfolio.project2': 'Projet angular',
        'portfolio.project3': 'Projet e-commerce',
        'portfolio.project4': 'Projet Whatsapp',
        'portfolio.project5': 'Projet Blog',
        'portfolio.project6': 'Projet TODO List',
        'contact.heading': 'Contactez <span>Moi</span>',
        'contact.name': 'Nom complet',
        'contact.email': 'Email',
        'contact.phone': 'Numero',
        'contact.subject': 'objet',
        'contact.message': 'Votre message',
        'contact.submit': 'Envoyer',
        'footer.copyright': 'Copyright © 2025 by SEB.L | Tous droits réservés.',
        'alert.invalidEmail': 'Veuillez vérifier votre adresse e-mail.',
        'alert.success': 'Message envoyé avec succès !',
        'alert.error': "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.",
        'typed.strings': ['DEVELOPPEUR', 'WEB', '& MOBILE'],
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Completed Projects',
        'nav.contact': 'Contact',
        'home.greeting': 'My name is',
        'home.role_prefix': 'I am a',
        'home.description': 'I am available to build websites with attractive, user-friendly interfaces for your business',
        'home.download_cv': 'Download my CV',
        'meta.title': 'Leonard SEBGO | Portfolio',
        'links.cv.href': 'cv/CVLEO.pdf',
        'links.cv.download': 'CVLEO.pdf',
        'links.portfolio': '#Projets',
        'social.linkedin': 'Leonard SEBGO LinkedIn profile',
        'social.facebook': 'Leonard SEBGO Facebook page',
        'about.heading': '<span>About</span>',
        'about.subtitle': 'Web & Mobile Developer!',
        'about.text': 'I work on developing and maintaining websites and mobile applications. I would be happy to put my programming skills and knowledge of web development languages such as HTML, CSS, JavaScript, as well as popular frameworks like Angular ... at the service of your business.',
        'common.see_more': 'See more',
        'services.heading': 'Our <span>Services</span>',
        'services.web.title': 'Web Development',
        'services.web.desc': 'Design and development of attractive websites using the latest design standards. Close collaboration with clients to understand their needs and create compelling visual concepts.',
        'services.design.title': 'Graphic Design',
        'services.design.desc': 'Creation of innovative designs for various media such as print materials, digital media, social networks, etc. Close collaboration with clients to understand their needs and translate their ideas into creative visuals.',
        'services.marketing.title': 'Digital Marketing',
        'services.marketing.desc': 'Development and execution of digital marketing campaigns to increase brand awareness, engagement, and conversions. We focus on creating relevant, valuable content to attract and retain the audience.',
        'portfolio.heading': 'Completed <span>Projects</span>',
        'portfolio.project1': 'Hackathon Forum Dclic Project',
        'portfolio.project2': 'Angular Project',
        'portfolio.project3': 'E-commerce Project',
        'portfolio.project4': 'WhatsApp Project',
        'portfolio.project5': 'Blog Project',
        'portfolio.project6': 'TODO List Project',
        'contact.heading': 'Contact <span>Me</span>',
        'contact.name': 'Full name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.subject': 'Subject',
        'contact.message': 'Your message',
        'contact.submit': 'Send',
        'footer.copyright': 'Copyright © 2025 by SEB.L | All rights reserved.',
        'alert.invalidEmail': 'Please check your email address.',
        'alert.success': 'Message sent successfully!',
        'alert.error': 'An error occurred while sending the message. Please try again later.',
        'typed.strings': ['DEVELOPER', 'WEB', '& MOBILE'],
    },
};

function getStoredLang() {
    try {
        return localStorage.getItem('portfolio-lang') || 'fr';
    } catch {
        return 'fr';
    }
}

function setStoredLang(lang) {
    try {
        localStorage.setItem('portfolio-lang', lang);
    } catch {
        // file:// or private browsing — ignore
    }
}

let currentLang = getStoredLang();
let typedInstance = null;

function t(key) {
    return translations[currentLang][key] || translations.fr[key] || key;
}

function applyLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    setStoredLang(lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = translations[lang][el.dataset.i18n];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = translations[lang][el.dataset.i18nHtml];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        el.placeholder = translations[lang][el.dataset.i18nPlaceholder];
    });

    document.querySelectorAll('[data-i18n-href]').forEach((el) => {
        const value = translations[lang][el.dataset.i18nHref];
        if (value) el.setAttribute('href', value);
    });

    document.querySelectorAll('[data-i18n-download]').forEach((el) => {
        const value = translations[lang][el.dataset.i18nDownload];
        if (value) el.setAttribute('download', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const value = translations[lang][el.dataset.i18nAriaLabel];
        if (value) el.setAttribute('aria-label', value);
    });

    if (translations[lang]['meta.title']) {
        document.title = translations[lang]['meta.title'];
    }

    document.querySelectorAll('.lang-option').forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.setAttribute('aria-label', lang === 'fr' ? 'Changer de langue' : 'Change language');
    }

    initTyped(lang);
}

function initTyped(lang) {
    const el = document.querySelector('.anime-text');
    if (!el || typeof Typed === 'undefined') return;

    if (typedInstance && typeof typedInstance.destroy === 'function') {
        typedInstance.destroy();
        typedInstance = null;
    }

    el.textContent = '';

    typedInstance = new Typed(el, {
        strings: translations[lang]['typed.strings'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
    });
}

function initLanguageToggle() {
    document.querySelectorAll('.lang-option').forEach((option) => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const newLang = option.dataset.lang;
            if (newLang && newLang !== currentLang) {
                applyLanguage(newLang);
            }
        });
    });
}

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
            });
            const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

initLanguageToggle();
applyLanguage(currentLang);

if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance:'80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
    ScrollReveal().reveal('.home-content h1,.about-img ', {origin:'left'});
    ScrollReveal().reveal('.home-content p,.about-content ', {origin:'right'});
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let currentTheme = 'theme1';

if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove(currentTheme);
        currentTheme = currentTheme === 'theme1' ? 'theme2' : 'theme1';
        body.classList.add(currentTheme);
    });
}

emailjs.init("fEpzn6CBuQmyo11Vk");

function envoyerFormulaire(event) {
    event.preventDefault();

    const nom = document.getElementsByName('nom')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const numero = document.getElementsByName('numero')[0].value;
    const objet = document.getElementsByName('objet')[0].value;
    const message = document.getElementsByName('message')[0].value;


    if (!isValidEmail(email)) {
        alert(t('alert.invalidEmail'));
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
            alert(t('alert.success'));
        }, function(error) {
            alert(t('alert.error'));
        });
}
function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const formulaire = document.getElementById('monFormulaire');
formulaire.addEventListener('submit', envoyerFormulaire);
