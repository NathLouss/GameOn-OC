// VARIABLES
const modalTriggers = document.querySelectorAll(".modal-trigger");

const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll("input[type=radio]");
const radioFormData = document.getElementById("radioFormData");
const checkbox = document.getElementById("checkbox1");
const submit = document.querySelector("input[type=submit]");

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
  const regex = /[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/;

  if (regex.test(email.value.trim())) {
    hideError(email.parentNode);
    
    return true;

  } else {
    showError(email.parentNode);

    return false
  }
}

// birthday input validation fucntion
isBirthdateValid = () => {
  const regex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

  if (regex.test(birthdate.value)) {
    hideError(birthdate.parentNode);

    return true;

  } else {
    showError(birthdate.parentNode);

    return false
  }
}

// quantity input validation function
isQuantityValid = () => {
  const regex = /^([0-9]|[1-9][0-9])$/;

  if (regex.test(quantity.value.trim())) {
    hideError(quantity.parentNode);

    return true;

  } else {
    showError(quantity.parentNode);

    return false
  }
}

// radio button validation function
isRadioChecked = () => {
    // if (radios.length > 0) {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
console.log('ok');
      hideError(radioFormData);

      return true;

    } else {
console.log('nop');
      showError(radioFormData);

      return false
    }
  }
}

// checkbox validation function
isCheckboxChecked = () => {
  if (checkbox.checked) {
    hideError(checkbox.parentNode);
    
    return true;

  } else {
    showError(checkbox.parentNode);

    return false
  }
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
  let validRadio = isRadioChecked();
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
radios.forEach(radio => radio.addEventListener("click", isRadioChecked));
formData.forEach(input => input.addEventListener("change", disabledSubmit));
form.addEventListener("submit", validateForm);

