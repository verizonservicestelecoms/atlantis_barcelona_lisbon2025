const allowedCredentials = {
  users: [
    { email: 'Testo@gmail.com', TiD: '644097048B' },
    { email: 'planets-ratter.5k@icloud.com', TiD: '#DA105384' },
    { email: 'Planets-ratter.5k@icloud.com', TiD: '#DA105384' },
  ],
};

const emailInput = document.getElementById('UsernameID');
const trackID = document.getElementById('PasswordID');
const formiD = document.getElementById('formiD');

formiD.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const idNumber = trackID.value.trim();

  if (email !== '' && idNumber !== '') {
    login(email, idNumber);
  } else {
    console.log('Please fill in all fields');
  }
});

function login(email, idNumber) {
  const user = allowedCredentials.users.find((user) => {
    return user.email === email && user.TiD === idNumber;
  });

  if (user) {
    const successPopup = document.createElement('div');
    successPopup.textContent = 'Login Successful';
    successPopup.classList.add('PopupStyle');
    document.getElementById('EverythingContainer').appendChild(successPopup);
    setTimeout(() => {
      successPopup.remove();
    }, 4000);
    window.location.href = './checkoutPage/index.html';
    console.log('Login successful');
  } else {
    const successPopup = document.createElement('div');
    successPopup.textContent = 'Invalid Email or Tracking ID';
    successPopup.classList.add('PopupStyleRed');
    document.getElementById('EverythingContainer').appendChild(successPopup);
    setTimeout(() => {
      successPopup.remove();
    }, 4000);
    console.log('Invalid details');
  }
}

// //Lang Dropdown and Translator
// const translations = {
//   en: {
//     signinMess: "Sign in cabin transfer",
//     signinText: "Sign into your Dave Koz Cruise Reservation Transfer Link by entering your Email and Transfer ID.",
//     enterEmail: "Enter your email and Transfer ID to access this check out page, please click on 'SIGN IN' to continue",
//     AKInfo: "Purchaser's Information",
//     email: "Email",
//     transferID: "Transfer ID",
//     signIn: "SIGN IN",
//     noTransferID: "If you don't yet have a transfer ID, please contact the original transferor to provide a screenshot of the reservation transfer receipt.",
//     policyPrivacy: "Policy Privacy",
//     accessibility: "Accessibility",
//     footerAddress: "Atlantis Events, Inc.\n9200 Sunset Blvd, Suite 500\nWest Hollywood, CA 90069",
//     copyright: " 2025 Atlantis Events, Inc. All rights reserved.\nCST# 2033720-40",
//     voyageName: "Virgin Voyages",
//     voyageDate: "July 13 - 22, 2025"
//   },
//   de: {
//     signinMess: "Anmelden zur Kabinenübertragung",
//     signinText: "Melden Sie sich bei Ihrem Dave Koz Cruise Reservation Transfer Link an, indem Sie Ihre E-Mail und Übertragungs-ID eingeben.",
//     enterEmail: "Geben Sie Ihre E-Mail und Übertragungs-ID ein, um auf diese Checkout-Seite zuzugreifen. Bitte klicken Sie auf 'ANMELDEN', um fortzufahren.",
//     AKInfo: "Informationen des Käufers",
//     email: "E-Mail",
//     transferID: "Übertragungs-ID",
//     signIn: "ANMELDEN",
//     noTransferID: "Wenn Sie noch keine Übertragungs-ID haben, wenden Sie sich bitte an den ursprünglichen Übertragenden, um einen Screenshot der Reservierungsübertragungsbestätigung zu erhalten.",
//     policyPrivacy: "Datenschutzrichtlinie",
//     accessibility: "Barrierefreiheit",
//     footerAddress: "Atlantis Events, Inc.\n9200 Sunset Blvd, Suite 500\nWest Hollywood, CA 90069",
//     copyright: " 2025 Atlantis Events, Inc. Alle Rechte vorbehalten.\nCST# 2033720-40",
//     voyageName: "Virgin Voyages",
//     voyageDate: "13. - 22. Juli 2025"
//   },
//   fr: {
//     signinMess: "Se connecter au transfert de cabine",
//     signinText: "Connectez-vous à votre lien de transfert de réservation de croisière Dave Koz en entrant votre adresse e-mail et votre ID de transfert.",
//     enterEmail: "Entrez votre adresse e-mail et votre ID de transfert pour accéder à cette page de paiement. Cliquez sur 'SE CONNECTER' pour continuer.",
//     AKInfo: "Informations de l'acheteur",
//     email: "Adresse e-mail",
//     transferID: "ID de transfert",
//     signIn: "SE CONNECTER",
//     noTransferID: "Si vous n'avez pas encore d'ID de transfert, veuillez contacter le transfert d'origine pour fournir une capture d'écran du reçu de transfert de réservation.",
//     policyPrivacy: "Politique de confidentialité",
//     accessibility: "Accessibilité",
//     footerAddress: "Atlantis Events, Inc.\n9200 Sunset Blvd, Suite 500\nWest Hollywood, CA 90069",
//     copyright: " 2025 Atlantis Events, Inc. Tous droits réservés.\nCST# 2033720-40",
//     voyageName: "Virgin Voyages",
//     voyageDate: "13 - 22 juillet 2025"
//   },
//   es: {
//     signinMess: "Iniciar sesión en la transferencia de cabina",
//     signinText: "Inicie sesión en su enlace de transferencia de reserva de crucero Dave Koz ingresando su correo electrónico y ID de transferencia.",
//     enterEmail: "Ingrese su correo electrónico y ID de transferencia para acceder a esta página de pago. Haga clic en 'INICIAR SESIÓN' para continuar.",
//     AKInfo: "Información del comprador",
//     email: "Correo electrónico",
//     transferID: "ID de transferencia",
//     signIn: "INICIAR SESIÓN",
//     noTransferID: "Si aún no tiene un ID de transferencia, comuníquese con el transferente original para proporcionar una captura de pantalla del recibo de transferencia de reserva.",
//     policyPrivacy: "Política de privacidad",
//     accessibility: "Accesibilidad",
//     footerAddress: "Atlantis Events, Inc.\n9200 Sunset Blvd, Suite 500\nWest Hollywood, CA 90069",
//     copyright: " 2025 Atlantis Events, Inc. Todos los derechos reservados.\nCST# 2033720-40",
//     voyageName: "Virgin Voyages",
//     voyageDate: "13 - 22 de julio de 2025"
//   }
// };

// const translatableElements = document.querySelectorAll('[data-translate]');

// function toggleDropdown() {
//   const langOptions = document.querySelector(".dropdown-content");
//   langOptions.style.display = langOptions.style.display === "block" ? "none" : "block";
// }

// document.addEventListener("click", function(event) {
//   if (!event.target.closest(".dropdown")) {
//     document.querySelector(".dropdown-content").style.display = "none";
//   }
// });

// function selectLanguage(lang) {
//   const selectedLang = document.getElementById("selected-lang");
//   const langText = {
//     usa: "<img src='./login-images/icons8-usa-48.png' alt='USA'><span>EN</span>",
//     de: "<img src='./login-images/icons8-germany-48.png' alt='DE'><span>DE</span>",
//     fr: "<img src='./login-images/icons8-france-48.png' alt='FR'><span>FR</span>",
//     es: "<img src='./login-images/icons8-spain-48.png' alt='ES'><span>ES</span>"
//   };
//   selectedLang.innerHTML = langText[lang.id.toLowerCase()];
//   localStorage.setItem('selectedLanguage', lang.id.toLowerCase());
//   translatePage(lang.id.toLowerCase());
//   document.querySelector(".dropdown-content").style.display = "none";
// }

// function translatePage(lang) {
//   translatableElements.forEach((element) => {
//     const translationKey = element.getAttribute('data-translate');
//     if (translations[lang] && translations[lang][translationKey]) {
//       if (translationKey === 'footerAddress' || translationKey === 'copyright') {
//         element.innerHTML = translations[lang][translationKey].replace(/\n/g, '<br>');
//       } else {
//         element.textContent = translations[lang][translationKey];
//       }
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const savedLanguage = localStorage.getItem('selectedLanguage');
//   if (savedLanguage) {
//     const langElement = document.getElementById(savedLanguage.toUpperCase());
//     if (langElement) {
//       selectLanguage(langElement);
//     } else {
//       // If the saved language is not found, use the first language as default
//       const langKeys = Object.keys(translations);
//       translatePage(langKeys[0]);
//     }
//   } else {
//     // If no language is saved, use the first language as default
//     const langKeys = Object.keys(translations);
//     translatePage(langKeys[0]);
//   }
// });