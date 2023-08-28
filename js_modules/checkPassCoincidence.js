import CONSTRAINTS from "./constraints.js";

const CHECK_PASS_COINCIDENCE = () => {
   const PASSWORD_FIELD = document.getElementById("password");
   const PASSWORD_VALUE = PASSWORD_FIELD.value;
   const COMFIRM_PASSWORD_FIELD = document.getElementById("comfirm-password");
   const COMFIRM_PASSWORD_VALUE = COMFIRM_PASSWORD_FIELD.value;

   if (PASSWORD_VALUE === COMFIRM_PASSWORD_VALUE) {
      COMFIRM_PASSWORD_FIELD.setCustomValidity("");
   } else {
      COMFIRM_PASSWORD_FIELD.setCustomValidity(CONSTRAINTS.password[2]);
   }
};

export default CHECK_PASS_COINCIDENCE;
