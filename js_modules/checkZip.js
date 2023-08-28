import CONSTRAINTS from "./constraints.js";

const CHECK_ZIP = () => {
   const COUNTRY = document.getElementById("country").value;
   const ZIP_FIELD = document.getElementById("zip-code");

   const CONSTRAINT = new RegExp(CONSTRAINTS[COUNTRY][0], "");
   if (CONSTRAINT.test(ZIP_FIELD.value)) {
      ZIP_FIELD.setCustomValidity("");
   } else {
      ZIP_FIELD.setCustomValidity(CONSTRAINTS[COUNTRY][1]);
   }
};

export default CHECK_ZIP;
