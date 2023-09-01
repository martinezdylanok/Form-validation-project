import CONSTRAINTS from "./constraints.js";

const CHECK_PASS_COINCIDENCE = () => {
   const PASSWORD_FIELD = document.getElementById("password");
   const PASSWORD_VALUE = PASSWORD_FIELD.value;
   const CONFIRM_PASSWORD_FIELD = document.getElementById("confirm-password");
   const CONFIRM_PASSWORD_VALUE = CONFIRM_PASSWORD_FIELD.value;

   if (CONFIRM_PASSWORD_VALUE.trim() === "") {
      CONFIRM_PASSWORD_FIELD.setCustomValidity("Confirm password cannot be empty");
      return false;
   } else {
      if (PASSWORD_VALUE === CONFIRM_PASSWORD_VALUE && CONFIRM_PASSWORD_VALUE !== "") {
         CONFIRM_PASSWORD_FIELD.setCustomValidity("");
         return true;
      } else {
         CONFIRM_PASSWORD_FIELD.setCustomValidity(CONSTRAINTS.password[2]);
         return false;
      }
   }
};

export default CHECK_PASS_COINCIDENCE;
