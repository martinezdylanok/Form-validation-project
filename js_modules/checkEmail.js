import CONSTRAINTS from "./constraints.js";

const CHECK_EMAIL = () => {
   const EMAIL_FIELD = document.getElementById("email");
   const EMAIL_VALUE = EMAIL_FIELD.value;

   const CONSTRAINT = new RegExp(CONSTRAINTS.email[0], "");
   if (CONSTRAINT.test(EMAIL_VALUE)) {
      EMAIL_FIELD.setCustomValidity("");
   } else {
      EMAIL_FIELD.setCustomValidity(CONSTRAINTS.email[1]);
   }
};

export default CHECK_EMAIL;
