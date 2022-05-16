// VARIABLES
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalContainer = document.querySelector(".bground");

const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll("input[name=location]");
const radioFormData = document.getElementById("radioFormData");
const checkbox = document.getElementById("checkbox1");
const submit = document.querySelector("input[type=submit]");
const modalBody = document.querySelector(".content");

// function open or close the modal
toggleModal = () => {
  modalContainer.classList.toggle("active");
}

// function check if Firstname is valid & display or not error
isFirstnameValid = () => {
  let firstnameValue = firstname.value.trim();
  if (firstnameValue != "") {
    const regex = /[A-Za-z0-9]{2,}/;

    if (regex.test(firstnameValue)) {

      return hideError(firstname.parentNode);
      } 
  
    return showError(firstname.parentNode)
  }
}

// function check if Lastname is valid & display or not error
isLastnameValid = () => {
  let lastnameValue = lastname.value.trim();
  if (lastnameValue != "") {
    const regex = /[A-Za-z0-9]{2,}/;

    if (regex.test(lastnameValue)) {

      return hideError(lastname.parentNode);
    } 

    return showError(lastname.parentNode)
  }
}

// function check if email is valid & display or not error
isEmailValid = () => {
  let emailValue = email.value.trim();
  if (emailValue != "") {
    const regex = /[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/;

    if (regex.test(emailValue)) {

      return hideError(email.parentNode);
    } 

    return showError(email.parentNode)
  }
}

// function check if birthdate is valid & display or not error
isBirthdateValid = () => {
  let birthdateValue = birthdate.value;
  if (birthdateValue != "") {
    const regex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

    if (regex.test(birthdateValue)) {

      return hideError(birthdate.parentNode);
    } 

    return showError(birthdate.parentNode)
  }
}

// function check if quantity is valid & display or not error
isQuantityValid = () => {
  let quantityValue = quantity.value;
  if (quantityValue != "") {
    const regex = /^([0-9]|[1-9][0-9])$/;

    if (regex.test(quantityValue)) {

      return hideError(quantity.parentNode);
    } 

    return showError(quantity.parentNode)
  }
}

// function check if radio button is checked & display or not error
isRadioChecked = () => {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {

      return hideError(radioFormData);
    } 
  }

  return showError(radioFormData)
}

// function check if checkbox is checked & display or not error
isCheckboxChecked = () => {
  if (checkbox.checked) {

    return hideError(checkbox.parentNode);
  } 

  return showError(checkbox.parentNode)
}

// function to display error message
showError = (element) => {
  element.setAttribute("data-error-visible", true);
  return false
}

// function to hide error message
hideError = (element) => {
  element.removeAttribute("data-error-visible");
  return true
}

// function to check if all inputs are valid
checkInputs = () => {
  let validFirstname = isFirstnameValid();
  let validLastname = isLastnameValid();
  let validEmail = isEmailValid();
  let validBirthdate = isBirthdateValid();
  let validQuantity = isQuantityValid();
  let validRadio = isRadioChecked();
  let validCheckbox = isCheckboxChecked();
  let isInputsValid = validFirstname && validLastname && validEmail && validBirthdate && validQuantity && validRadio && validCheckbox;
  
  if (isInputsValid) {

    return true
  }

  return false
}

// function check if inputs are valid & display or not submit button
disabledSubmit = () => {
  checkInputs ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", true);
}

// function check if all inputs are valid & submit the form
validateForm = (e) => {
  e.preventDefault();

  if (checkInputs()) {
    modalBody.innerHTML = "Merci pour votre insciption" + '<button id="close-btn">Fermer</button>'; 
  }
}

// EVENT LISTENERS
modalTriggers.forEach(btn => btn.addEventListener("click", toggleModal));

firstname.addEventListener("blur", isFirstnameValid);
lastname.addEventListener("blur", isLastnameValid);
email.addEventListener("blur", isEmailValid);
birthdate.addEventListener("change", isBirthdateValid);
quantity.addEventListener("blur", isQuantityValid);
radios.forEach(radio => radio.addEventListener("click", isRadioChecked));
formData.forEach(input => input.addEventListener("change", disabledSubmit));
form.addEventListener("submit", validateForm);
