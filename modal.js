function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const fenetreEnvoie = document.querySelector(".fenetre-envoi");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Click to leave
closeBtn.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
    modalbg.style.display = "none";
}

/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// DOM formulaire de saisie
const form = document.getElementById("formulaire");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const submit = document.querySelector(".btn-submit");
const inputs = document.getElementsByTagName("input");
let firstnameRegExp = new RegExp("[0-9]");
let lastnameRegExp = new RegExp("[0-9]");

// DOM champs d'erreurs
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const erroreMail = document.getElementById("errorEmail");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorQuantity = document.getElementById("errorQuantity");
const checkIcon = document.querySelector(".checkbox-input");
const errorCity = document.getElementById("errorCity");
const errorConditionUser = document.getElementById("errorConditionUser");
let erreur = 0;

// validation au moment du clique sur "SUBMIT"
form.addEventListener("submit", validate);

// fonction valider le formulaire
function validate(a) {
    a.preventDefault();

    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isEmailValid = false;
    let isBirthDateValid = false;
    let isQuantityValid = false;
    let isGetRadioButtonValid = false;
    let isConditionUserValid = false;

    // Vérification du champ PRENOM
    if (firstName.value.trim() == "") {
        errorFirstName.innerHTML = "Vous devez écrire votre prénom.";
        firstName.style.border = "2px solid #fe152f";
        isFirstNameValid = false;
    } else if (firstnameRegExp.test(firstName.value)) {
        errorFirstName.innerHTML =
            "Votre prénom ne doit pas comporter de chiffres ou de symboles.";
        firstName.style.border = "2px solid #fe152f";
        isFirstNameValid = false;
    } else {
        isFirstNameValid = true;
        errorFirstName.innerHTML = "";
        firstName.style.border = "";
    }

    // Vérification du champ NOM
    if (lastName.value.trim() == "") {
        errorLastName.innerHTML = "Vous devez écrire votre nom.";
        lastName.style.border = "2px solid #fe152f";
        isLastNameValid = false;
    } else if (lastnameRegExp.test(lastName.value)) {
        errorLastName.innerHTML =
            "Votre nom ne doit pas comporter de chiffres ou de symboles.";
        lastName.style.border = "2px solid #fe152f";
        isLastNameValid = false;
    } else {
        isLastNameValid = true;
        errorLastName.innerHTML = "";
        lastName.style.border = "";
    }

    // Vérification du champ EMAIL
    if (eMail.value.trim() == "") {
        erroreMail.innerHTML = "Vous devez écrire votre e-mail.";
        eMail.style.border = "2px solid #fe152f";
        isEmailValid = false;
    } else if (eMail.value.trim() === emailIsValid) {
        erroreMail.innerHTML = "L'e-mail saisi est incorrect.";
        eMail.style.border = "2px solid #fe152f";
        isEmailValid = false;
    } else {
        isEmailValid = true;
        erroreMail.innerHTML = "";
        eMail.style.border = "";
    }

    // Vérification du champ ANNIVERSAIRE
    if (birthDate.value.trim() == "") {
        errorBirthdate.innerHTML =
            "Vous devez renseigner votre date d'anniversaire.";
        birthDate.style.border = "2px solid #fe152f";
        isBirthDateValid = false;
    } else {
        isBirthDateValid = true;
        errorBirthdate.innerHTML = "";
        birthDate.style.border = "";
    }

    // Vérification du champ NOMBRE EVENEMENT
    if (quantity.value.trim() == "") {
        errorQuantity.innerHTML =
            "Vous devez préciser à combien d'évènement auquel vous avez participé.";
        quantity.style.border = "2px solid #fe152f";
        isQuantityValid = false;
    } else {
        isQuantityValid = true;
        errorQuantity.innerHTML = "";
        quantity.style.border = "";
    }

    // Vérification du champ CHOIX DE VILLES
    if (getRadioButton(form.elements["location"]) == undefined) {
        errorCity.innerHTML =
            "Vous devez préciser dans quelle ville etait ces évènements.";
        isGetRadioButtonValid = false;
    } else {
        isGetRadioButtonValid = true;
        errorCity.innerHTML = "";
    }

    // Vérification du champ CONDITION UTILISATION
    const conditionUser = document.getElementById("checkbox1");
    let conditionsUserValue = conditionUser.checked;

    if (conditionsUserValue === false) {
        errorConditionUser.innerHTML =
            "Vous devez accepter les conditions d'utilisateur";
        isConditionUserValid = false;
    } else {
        conditionsUserValue = true;
        isConditionUserValid = true;
        errorConditionUser.innerHTML = "";
    }

    // FIN de fonction avec affichage du message de validation
    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isQuantityValid &&
        isGetRadioButtonValid &&
        isBirthDateValid &&
        isConditionUserValid
    ) {
        messageConfirmation();
        closeModal();
        removeData();
    }
}

/*---- fonction qui compose la partie validate-----*/

// Fonction de vérification des emails
function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Fonction de vérification des boutons radios
function getRadioButton(radioBouton) {
    let choix;

    for (let radio of radioBouton) {
        if (radio.checked) {
            choix = radio.value;
        }
    }
    return choix;
}

function removeData() {
    firstName.value = "";
    lastName.value = "";
    eMail.value = "";
    birthDate.value = "";
    quantity.value = "";
    conditionUser.checked = "";
}

function messageConfirmation() {
    fenetreEnvoie.style.display = "block";
}
