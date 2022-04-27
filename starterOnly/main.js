function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// const formData = document.querySelectorAll(".formData");

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

// collect prenom, listen event & check format
document.getElementById("prenom")
  .addEventListener("blur", (e) => {
    if (/[A-Za-z0-9]{2,}/.test(e.target.value.trim())) {
      console.log("ok");
    } else {
      console.log("nop");
    }
});

// collect nom, listen event & check format
document.getElementById("nom")
  .addEventListener("blur", (e) => {
    if (/[A-Za-z0-9]{2,}/.test(e.target.value.trim())) {
      console.log("ok");
    } else {
      console.log("nop");
    }
});

// collect email, listen event & check format
document.getElementById("email")
  .addEventListener("blur", (e) => {
    if (/[A-Za-z0-9]{1,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}/.test(e.target.value.trim())) {
      console.log("ok");
    } else {
      console.log("nop");
    }
});

// collect date, listen event & check format
document.getElementById("birthdate")
  .addEventListener("change", (e) => {
    if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(e.target.value)) {
      console.log("ok");
    } else {
      console.log("nop");
    }
});

// collect quantity, listen event & check format
document.getElementById("quantity")
  .addEventListener("blur", (e) => {
    if (/\d/.test(e.target.value.trim())) {
      console.log("ok");
    } else {
      console.log("nop");
    }
});

// collect radio button & check format
document.querySelector('input[name="location"]:checked')
 




// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInputs
// });


  
