import CONSTRAINTS from "./constraints.js";

const CHECK_PASSWORD = () => {
   const PASSWORD_FIELD = document.getElementById("password");
   const PASSWORD_VALUE = PASSWORD_FIELD.value;

   if (PASSWORD_VALUE.trim() === "") {
      PASSWORD_FIELD.setCustomValidity("Password cannot be empty");
      return false;
   } else {
      const CONSTRAINT = new RegExp(CONSTRAINTS.password[0]);
      if (CONSTRAINT.test(PASSWORD_VALUE)) {
         PASSWORD_FIELD.setCustomValidity("");
         return true;
      } else {
         PASSWORD_FIELD.setCustomValidity(CONSTRAINTS.password[1]);
         return false;
      }
   }
};

export default CHECK_PASSWORD;
