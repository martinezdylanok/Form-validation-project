import CHECK_ZIP from "./checkZip.js";
import CHECK_EMAIL from "./checkEmail.js";
import CHECK_PASSWORD from "./checkPassword.js";
import CHECK_PASS_COINCIDENCE from "./checkPassCoincidence.js";
import CLEAR_INPUT_FIELDS from "./clearInputFields.js";

const VALIDATE_FORM = (event) => {
   event.preventDefault();

   const IS_ZIP_VALID = CHECK_ZIP();
   const IS_EMAIL_VALID = CHECK_EMAIL();
   const IS_PASSWORD_VALID = CHECK_PASSWORD();
   const DO_PASSWORDS_MATCH = CHECK_PASS_COINCIDENCE();
   const SUBMIT_MESSAGE = document.getElementById("submit-message");

   if (IS_ZIP_VALID && IS_EMAIL_VALID && IS_PASSWORD_VALID && DO_PASSWORDS_MATCH) {
      CLEAR_INPUT_FIELDS();
      SUBMIT_MESSAGE.classList.remove("invalid");
      SUBMIT_MESSAGE.classList.add("valid");
      SUBMIT_MESSAGE.innerText = "Congrats, the form has been submitted";
   } else {
      SUBMIT_MESSAGE.classList.remove("valid");
      SUBMIT_MESSAGE.classList.add("invalid");
      SUBMIT_MESSAGE.innerText = "You need to correctly complete all the fields before submitting the form";
   }
};

export default VALIDATE_FORM;
