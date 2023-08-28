import CHECK_ZIP from "./js_modules/checkZip.js";
import CHECK_EMAIL from "./js_modules/checkEmail.js";
import CHECK_PASSWORD from "./js_modules/checkPassword.js";
import CHECK_PASS_COINCIDENCE from "./js_modules/checkPassCoincidence.js";

window.onload = () => {
   document.getElementById("country").onchange = CHECK_ZIP;
   document.getElementById("zip-code").oninput = CHECK_ZIP;
   document.getElementById("email").oninput = CHECK_EMAIL;
   document.getElementById("password").oninput = CHECK_PASSWORD;
   document.getElementById("comfirm-password").oninput = CHECK_PASS_COINCIDENCE;
};
