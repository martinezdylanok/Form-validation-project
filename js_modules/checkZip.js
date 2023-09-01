import CONSTRAINTS from "./constraints.js";

const CHECK_ZIP = () => {
   const COUNTRY = document.getElementById("country").value;
   const ZIP_FIELD = document.getElementById("zip-code");

   if (ZIP_FIELD.value.trim() === "") {
      ZIP_FIELD.setCustomValidity("ZIP code cannot be empty");
      return false;
   } else {
      const CONSTRAINT = new RegExp(CONSTRAINTS[COUNTRY][0]);
      if (CONSTRAINT.test(ZIP_FIELD.value)) {
         ZIP_FIELD.setCustomValidity("");
         return true;
      } else {
         ZIP_FIELD.setCustomValidity(CONSTRAINTS[COUNTRY][1]);
         return false;
      }
   }
};

export default CHECK_ZIP;
