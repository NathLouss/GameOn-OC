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
  const regex = /[A-Za-z0-9]{2,}/;

  if (regex.test(firstname.value.trim())) {
    hideError(firstname.parentNode);

    return true;

  } else {
    showError(firstname.parentNode);

    return false
  }
}

//  last name input validation function
isLastnameValid = () => {
  const regex = /[A-Za-z0-9]{2,}/;

  if (regex.test(lastname.value.trim())) {
    hideError(lastname.parentNode);
    
    return true;

  } else {
    showError(lastname.parentNode);

    return false
  }
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
  console.log('age ok');
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

showError = (element) => {
  element.setAttribute("data-error-visible", true)
}

hideError = (element) => {
  element.removeAttribute("data-error-visible")
}

// disabled submit button function
disabledSubmit = () => {
  submit.setAttribute("disabled", true);

  let validFirstname = isFirstnameValid();
  let validLastname = isLastnameValid();
  let validEmail = isEmailValid();
  let validBirthdate = isBirthdateValid();
  let validQuantity = isQuantityValid();
  let isInputsValid = validFirstname && validLastname && validEmail && validBirthdate && validQuantity;
 
  if (isInputsValid) {
    submit.removeAttribute("disabled")
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
  let isInputsValid = validFirstname && validLastname && validEmail && validBirthdate && validQuantity && validRadio && validCheckbox;
  
  if (isInputsValid) {
    form.submit();
    
    return true
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

