import CHECK_ZIP from "./js_modules/checkZip.js";
import CHECK_EMAIL from "./js_modules/checkEmail.js";
import CHECK_PASSWORD from "./js_modules/checkPassword.js";
import CHECK_PASS_COINCIDENCE from "./js_modules/checkPassCoincidence.js";
import VALIDATE_FORM from "./js_modules/validateForm.js";

window.onload = () => {
   const ZIP_FIELD = document.getElementById("zip-code");
   const EMAIL_FIELD = document.getElementById("email");
   const PASSWORD_FIELD = document.getElementById("password");
   const CONFIRM_PASSWORD_FIELD = document.getElementById("confirm-password");
   const FORM = document.getElementById("form");

   ZIP_FIELD.addEventListener("blur", CHECK_ZIP);
   ZIP_FIELD.addEventListener("input", CHECK_ZIP);

   EMAIL_FIELD.addEventListener("blur", CHECK_EMAIL);
   EMAIL_FIELD.addEventListener("input", CHECK_EMAIL);

   PASSWORD_FIELD.addEventListener("blur", CHECK_PASSWORD);
   PASSWORD_FIELD.addEventListener("input", CHECK_PASSWORD);

   CONFIRM_PASSWORD_FIELD.addEventListener("blur", CHECK_PASS_COINCIDENCE);
   CONFIRM_PASSWORD_FIELD.addEventListener("input", CHECK_PASS_COINCIDENCE);

   FORM.addEventListener("submit", VALIDATE_FORM);
};
