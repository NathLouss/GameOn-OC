function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const formData = document.querySelectorAll(".formData");


// definition of the function that opens or closes the modal
toggleModal = () => {
  // modal element collect
  const modalContainer = document.querySelector(".bground");
  // adding or removing the active class to the modal element
  modalContainer.classList.toggle("active");
}

// collect of all trigger element & iteration
document.querySelectorAll(".modal-trigger").forEach(btn => 
  // on each element listen click and call of the function
  btn.addEventListener("click", toggleModal)
);
