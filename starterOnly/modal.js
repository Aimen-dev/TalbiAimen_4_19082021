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
const closeBtn = document.querySelector(".close")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Click to leave
closeBtn.addEventListener("click" , closeModal);

// Close modal form
function closeModal () {
  modalbg.style.display="none"
}


/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// Variables 
const form = document.getElementById("formulaire");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const submit = document.querySelector('.btn-submit');
const inputs = document.getElementsByTagName('input');
let firstnameRegExp = new RegExp ('[0-9]');
let lastnameRegExp = new RegExp ('[0-9]');

// Variables champs d'erreurs
const errorFirstName = document.querySelector(".errorFirstName");
const errorLastName = document.querySelector(".errorLastName");
const erroreMail = document.querySelector(".erroremail");
const errorBirthdate = document.querySelector(".errorbirthdate");
const errorQuantity = document.querySelector(".errorquantity");
const checkIcon = document.querySelector(".checkbox-input");
const errorCity = document.querySelector(".errorcity");
const errorConditionUser = document.querySelector(".errorconditionuser");
let erreur = 0;

// validation au moment du clique sur "SUBMIT"
form.addEventListener('submit', validate);

// fonction valider le formulaire 
function validate(e) {

    e.preventDefault();
  
    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isEmailValid = false;
    let isBirthDateValid = false;
    let isQuantityValid = false;
    let isGetRadioButtonValid = false;
    let isConditionUserValid = false;