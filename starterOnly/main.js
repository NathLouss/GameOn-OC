// VARIABLES
const modalTriggers = document.querySelectorAll(".modal-trigger");

const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById("checkbox1");
const submit = document.querySelector('input[type="submit"]');

// function open or close the modal
toggleModal = () => {
  const modalContainer = document.querySelector(".bground");
  modalContainer.classList.toggle("active");
}

// first name input validation function
 isFirstnameValid = () => {
  firstname.classList.remove(":valid");
  const regex = /[A-Za-z0-9]{2,}/;
  if (regex.test(firstname.value.trim())) {
    firstname.classList.add(":valid");

    return true;
  }

  return false
}

//  last name input validation function
isLastnameValid = () => {
  lastname.classList.remove(":valid");
  const regex = /[A-Za-z0-9]{2,}/;
  if (regex.test(lastname.value.trim())) {
    lastname.classList.add(":valid");

    return true;
  }

  return false
}

// email input validation function
isEmailValid = () => {
  email.classList.remove(":valid");
  const regex = /[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/;
  if (regex.test(email.value.trim())) {
    email.classList.add(":valid");

    return true;
  }

  return false
}

// birthday input validation fucntion
isBirthdateValid = () => {
  birthdate.classList.remove(":valid");
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (regex.test(birthdate.value)) {
    birthdate.classList.add(":valid");

    return true;
  }

  return false
}

// quantity input validation function
isQuantityValid = () => {
  quantity.classList.remove(":valid");
  const regex = /\d/;
  if (regex.test(quantity.value.trim())) {
    quantity.classList.add(":valid");

    return true;
  }

  return false
}

// radio button validation function
atLeastOneRadioButtonIsChecked = () => {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {

      return true;
    }  
  }

  return false
}

// checkbox validation function
isCheckboxChecked = () => {
  if (checkbox.checked) {

    return true;
  }  

  return false
}

// disabled submit button function
disabledSubmit = () => {
  submit.setAttribute("disabled", true);
  if (isFirstnameValid() && isLastnameValid() && isEmailValid() && isBirthdateValid() && isQuantityValid()) {
    submit.removeAttribute("disabled");
  }
}

// form validation function
validateForm = (e) => {
  e.preventDefault();

  checkInputs()
}

checkInputs = () => {

  let validFirstname = isFirstnameValid();
  let validLastname = isLastnameValid();
  let validEmail = isEmailValid();
  let validBirthdate = isBirthdateValid();
  let validQuantity = isQuantityValid();
  let validRadio = atLeastOneRadioButtonIsChecked();
  let validCheckbox = isCheckboxChecked();

  if (validFirstname === true && validLastname === true && validEmail === true && validBirthdate === true && validQuantity === true && validRadio === true && validCheckbox=== true ) {
    return true;
  }

  return false
}

// EVENT LISTENERS
modalTriggers.forEach(btn => btn.addEventListener("click", toggleModal));

firstname.addEventListener("blur", isFirstnameValid);
lastname.addEventListener("blur", isLastnameValid);
email.addEventListener("blur", isEmailValid);
birthdate.addEventListener("change", isBirthdateValid);
quantity.addEventListener("blur", isQuantityValid);
formData.forEach(input => input.addEventListener("change", disabledSubmit));
form.addEventListener("submit", validateForm);

