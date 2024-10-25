export function LoginFormValidations(data) {
    var errors = new Array();
  
    const {
      email,
      password,
    } = data;
  
   
    if (!email) {
      errors.push("Email is required");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      errors.push("Incorrect email format");
    }
  
    if (!password) {
      errors.push("Password is required");
    }   
    return errors;
  }
  