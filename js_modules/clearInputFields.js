const CLEAR_INPUT_FIELDS = () => {
   const ZIP_FIELD = document.getElementById("zip-code");
   const EMAIL_FIELD = document.getElementById("email");
   const PASSWORD_FIELD = document.getElementById("password");
   const CONFIRM_PASSWORD_FIELD = document.getElementById("confirm-password");
   const ALL_FIELDS = [ZIP_FIELD, EMAIL_FIELD, PASSWORD_FIELD, CONFIRM_PASSWORD_FIELD];

   ALL_FIELDS.forEach((FIELD) => {
      FIELD.value = "";
   });
};

export default CLEAR_INPUT_FIELDS;
