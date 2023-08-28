const CONSTRAINTS = {
   arg: [/^[0-9]{4}$/, "Argentina ZIPs must have exactly 4 digits: e.g. 1950"],
   br: [/^[0-9]{4}$/, "Brasil ZIPs must have exactly 4 digits: e.g. 2333"],
   dk: [/^[0-9]{4}$/, "Denmark ZIPs must have exactly 4 digits: e.g. 2720"],
   email: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/, "Please enter a valid email address using '@' and ending with '.com'"],
   password: [/^(?!.*\s).{8,16}$/, "Please enter a valid password with at minimum of 8 characters, and a max of 16", "The password needs to be equal to the previous one"],
};

export default CONSTRAINTS;
