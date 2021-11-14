let numRegEx = /\d/;
let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const validateName = (name) =>
  name.length < 2 || numRegEx.test(name);
export const validateEmail = (email) => !emailRegEx.exec(email);
export const validatePassword = (password) =>
  password.length < 6 || !passRegEx.exec(password);
