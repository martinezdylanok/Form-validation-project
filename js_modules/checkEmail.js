import CONSTRAINTS from "./constraints.js";

const CHECK_EMAIL = () => {
   const EMAIL_FIELD = document.getElementById("email");
   const EMAIL_VALUE = EMAIL_FIELD.value;

   if (EMAIL_VALUE.trim() === "") {
      EMAIL_FIELD.setCustomValidity("Email cannot be empty");
      return false;
   } else {
      const CONSTRAINT = new RegExp(CONSTRAINTS.email[0]);
      if (CONSTRAINT.test(EMAIL_VALUE)) {
         EMAIL_FIELD.setCustomValidity("");
         return true;
      } else {
         EMAIL_FIELD.setCustomValidity(CONSTRAINTS.email[1]);
         return false;
      }
   }
};

export default CHECK_EMAIL;
