import CHECK_ZIP from "./js_modules/checkZip.js";

window.onload = () => {
   document.getElementById("country").onchange = CHECK_ZIP;
   document.getElementById("zip-code").oninput = CHECK_ZIP;
};
