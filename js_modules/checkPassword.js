import CONSTRAINTS from "./constraints.js";

const CHECK_PASSWORD = () => {
   const PASSWORD_FIELD = document.getElementById("password");
   const PASSWORD_VALUE = PASSWORD_FIELD.value;

   const CONSTRAINT = new RegExp(CONSTRAINTS.password[0]);
   if (CONSTRAINT.test(PASSWORD_VALUE)) {
      PASSWORD_FIELD.setCustomValidity("");
   } else {
      PASSWORD_FIELD.setCustomValidity(CONSTRAINTS.password[1]);
   }
};

export default CHECK_PASSWORD;
