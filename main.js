import CHECK_ZIP from "./js_modules/checkZip.js";
import CHECK_EMAIL from "./js_modules/checkEmail.js";

window.onload = () => {
   document.getElementById("country").onchange = CHECK_ZIP;
   document.getElementById("zip-code").oninput = CHECK_ZIP;
   document.getElementById("email").oninput = CHECK_EMAIL;
};
