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

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
    // TODO class diseable, remove diseable when form valid
    // formValidate quand tous les formData return true

    // récupère tous les formData, itère dessus 
      // add.eventlistener sur input au blur/click/change
      // récupère name input, on la stock dans une variable
      // récupère value input, on la stock dans une variable

        // si name input = firstname
    // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.//
          // si value input vide, 
            // return false + CSS data-error + message erreur
          // si non vide, test regex (mini 2 caractères)
            // si faux, return false + CSS data-error-visible="true" + message non valid
            // si vrai, input/formdata return true + CSS valid (à créer)
        
        // si name input = lastname
    // Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.//
          // si value input vide, 
            // return false + CSS data-error + message erreur
          // si non vide, test regex (mini 2 caractères)
            // si faux, return false + CSS data-error-visible="true" + message non valid
            // si vrai, input/formdata return true + CSS valid (à créer)

        // si name input = email
    // L'adresse électronique est valide.//
          // si value input vide,
            // return false + CSS data-error + message erreur
          // si non vide, test regex (mini 2 caractères @ mini 2 caractères . mini 2 caractères)
            // si faux, return false + CSS data-error-visible="true" + message non valid
            // si vrai, input/formdata return true + CSS valid (à créer)

        // si name input = quantity
    // Pour le nombre de concours, une valeur numérique est saisie.//
          // si value input vide,
            // return false + CSS data-error + message erreur
          // si non vide, test regex (digit)
            // si faux, return false + CSS data-error-visible="true" + message non valid
            // si vrai, input/formdata return true + CSS valid (à créer)

        // si name input = location
    // Un bouton radio est sélectionné.//
          // récupère tous les input avec name location, itère dessus
          // si 0 attribu checked
            // return false + CSS data-error + message erreur
          // si 1 attribu checked
            // input/formdata return true + CSS valid (à créer)

        // si name input = checkbox
    // La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.//
          // 

// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
   // TODO prevent.default pas de reset
