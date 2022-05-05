// MODAL //

// function that opens or closes the modal
toggleModal = () => {
  const modalContainer = document.querySelector(".bground");
  modalContainer.classList.toggle("active");
}

// collect of all trigger element & iteration
document.querySelectorAll(".modal-trigger")
  .forEach(
    btn => btn.addEventListener("click", toggleModal)
);

// FORM //

const formData = document.querySelectorAll(".formData");

// collect all inputs & stock on variable
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const quantity = document.getElementById("quantity");

// firstname input
isFirstnameValid = () => {
  let validFirstname = false;
  if (firstname === "") {
    console.log("missing something");
  } else if (/[A-Za-z0-9]{2,}/.test(firstname.value.trim())) {
    console.log("ok");
    firstname.classList.add(":valid");
    validFirstname = true;
  } else {
    console.log("nop");
    firstname.classList.remove(":valid");
  }
}

firstname.addEventListener("blur", isFirstnameValid);

//  lastname input
isLastnameValid = () => {
  let validLastname = false;
  if (lastname === "") {
    console.log("missing something");
  } else if (/[A-Za-z0-9]{2,}/.test(lastname.value.trim())) {
    console.log("ok");
    lastname.classList.add(":valid");
    validLastname = true;
  } else {
    console.log("nop");
    lastname.classList.remove(":valid");
  }
}

lastname.addEventListener("blur", isLastnameValid);

// email input
isEmailValid = () => {
  let validEmail = false;
  if (email === "") {
    console.log("missing something");
  } else if (/[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/.test(email.value.trim())) {
    console.log("ok");
    email.classList.add(":valid");
    validEmail = true;
  } else {
    console.log("nop");
    email.classList.remove(":valid");
  }
}

email.addEventListener("blur", isEmailValid);

// birthday input 
isBirthdayValid = () => {
  let validBirthday = false;
  if (birthday === "") {
    console.log("missing something");
  } else if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(birthday.value)) {
    console.log("ok");
    birthday.classList.add(":valid");
    validBirthday = true;
  } else {
    console.log("nop");
    birthday.classList.remove(":valid");
  }
}

birthday.addEventListener("change", isBirthdayValid);

// quantity input 
isQuantityValid = () => {
  let validQuantity = false;
  if (quantity === "") {
    console.log("missing something");
  } else if (/\d/.test(quantity.value.trim())) {
    console.log("ok");
    quantity.classList.add(":valid");
    validQuantity = true;
  } else {
    console.log("nop");
    quantity.classList.remove(":valid");
  }
}

quantity.addEventListener("blur", isQuantityValid);

// radio button
document.querySelector(".button")
  .addEventListener("change", (e) => {
  const radios = document.querySelector('input[name="location"]');
  const radioValue = false;

  for (var i=0; i<radios.length; i++) {
    if (radios[i].checked == true){
      radioValue = true;    
      console.log("ok");
    }
  }
});


// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

validateForm = () => {
  const submit = document.getElementsByClassName("btn-submit");
  if (validFirstname === true) {
    submit.classList.removeAttribute("disabled");
    submit.classList.add(":valid");
    return true;
  } else {
    console.log("try again !");
  }
}
