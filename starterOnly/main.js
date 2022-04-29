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

document.querySelectorAll(".formData")
    .forEach(
      input => input.addEventListener("blur",)
    )

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

validateForm = () => {
  //get values from inputs
  const firstnameValue = firstname.value.trim(); 
  const lastnameValue = lastname.value.trim(); 
  const emailValue = email.value.trim(); 
  const birthdayValue = birthday.value.trim(); 
  const quantityValue = quantity.value.trim(); 
  const checkbox1Value = checkbox1.value

  if (firstnameValue === "") {
    console.log("missing");
  } else if (!validFirstname(firstnameValue)) {
    console.log("not valid");
  } else {
    console.log("ok");
  }

  if (emailValue === "") {
    console.log("missing");
  } else if (!validEmail(emailValue)) {
    console.log("not valid");
  } else {
    console.log("ok");
  }

}

validFirstname = (firstname) => {
  /[A-Za-z0-9]{2,}/.test(firstname);
}

validEmail = (email) => {
  /[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/.test(email);
}
